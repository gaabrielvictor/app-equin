let modalKey = 0


let quantCavalos = 1

let cart = [] 



const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatoMonetario = (valor) => {
    if(valor) {
        return valor.toFixed(2)
    }
}

const abrirModal = () => {
    seleciona('.cavaloWindowArea').style.opacity = 0 
    seleciona('.cavaloWindowArea').style.display = 'flex'
    setTimeout(() => seleciona('.cavaloWindowArea').style.opacity = 1, 150)
}

const fecharModal = () => {
    seleciona('.cavaloWindowArea').style.opacity = 0 
    setTimeout(() => seleciona('.cavaloWindowArea').style.display = 'none', 500)
}

const botoesFechar = () => {
    
    selecionaTodos('.cavaloInfo--cancelButton, .cavaloInfo--cancelMobileButton').forEach( (item) => item.addEventListener('click', fecharModal) )
}

const preencheDadosDasCavalos = (cavaloItem, item, index) => {

	cavaloItem.setAttribute('data-key', index)
    cavaloItem.querySelector('.cavalo-item--img img').src = item.img
    cavaloItem.querySelector('.cavalo-item--price').innerHTML = formatoReal(item.price[2])
    cavaloItem.querySelector('.cavalo-item--name').innerHTML = item.name
    cavaloItem.querySelector('.cavalo-item--desc').innerHTML = item.description
}

const preencheDadosModal = (item) => {
    seleciona('.cavaloBig img').src = item.img
    seleciona('.cavaloInfo h1').innerHTML = item.name
    seleciona('.cavaloInfo--desc').innerHTML = item.description
    seleciona('.cavaloInfo--actualPrice').innerHTML = formatoReal(item.price[2])
}


const pegarKey = (e) => {
  
    let key = e.target.closest('.cavalo-item').getAttribute('data-key')
    console.log('cavalo clicada ' + key)
    console.log(cavaloJson[key])

    quantCavalos = 1

  
    modalKey = key

    return key
}

const preencherTamanhos = (key) => {
    
    seleciona('.cavaloInfo--size.selected').classList.remove('selected')

  
    selecionaTodos('.cavaloInfo--size').forEach((size, sizeIndex) => {
      
        (sizeIndex == 2) ? size.classList.add('selected') : ''
        size.querySelector('span').innerHTML = cavaloJson[key].sizes[sizeIndex]
    })
}

const escolherTamanhoPreco = (key) => {
   
    selecionaTodos('.cavaloInfo--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => {
            
            seleciona('.cavaloInfo--size.selected').classList.remove('selected')
       
            size.classList.add('selected')

            seleciona('.cavaloInfo--actualPrice').innerHTML = formatoReal(cavaloJson[key].price[sizeIndex])
        })
    })
}

const mudarQuantidade = () => {
    
    seleciona('.cavaloInfo--qtmais').addEventListener('click', () => {
        quantCavalos++
        seleciona('.cavaloInfo--qt').innerHTML = quantCavalos
    })

    seleciona('.cavaloInfo--qtmenos').addEventListener('click', () => {
        if(quantCavalos > 1) {
            quantCavalos--
            seleciona('.cavaloInfo--qt').innerHTML = quantCavalos	
        }
    })
}

const adicionarNoCarrinho = () => {
    seleciona('.cavaloInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

     
    	console.log("Cavalo " + modalKey)
    	
	    let size = seleciona('.cavaloInfo--size.selected').getAttribute('data-key')
	    console.log("Cor " + size)
	    
    	console.log("Quant. " + quantCavalos)
       
        let price = seleciona('.cavaloInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')
    
       
	    let identificador = cavaloJson[modalKey].id+'t'+size

       
        let key = cart.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        if(key > -1) {
           
            cart[key].qt += quantCavalos
        } else {
            
            let cavalo = {
                identificador,
                id: cavaloJson[modalKey].id,
                size, 
                qt: quantCavalos,
                price: parseFloat(price) 
            }
            cart.push(cavalo)
            console.log(cavalo)
            console.log('Sub total R$ ' + (cavalo.qt * cavalo.price).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

const abrirCarrinho = () => {
    console.log('Qtd de itens no carrinho ' + cart.length)
    if(cart.length > 0) {
        
	    seleciona('aside').classList.add('show')
        seleciona('header').style.display = 'flex' 
    }

   
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const fecharCarrinho = () => {
    
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw' 
        seleciona('header').style.display = 'flex'
    })
}

const atualizarCarrinho = () => {
   
	seleciona('.menu-openner span').innerHTML = cart.length
	
	
	if(cart.length > 0) {

		
		seleciona('aside').classList.add('show')

		
		seleciona('.cart').innerHTML = ''

        
		let subtotal = 0
		let desconto = 0
		let total    = 0

      
		for(let i in cart) {
			
			let cavaloItem = cavaloJson.find( (item) => item.id == cart[i].id )
			console.log(cavaloItem)

          
        	subtotal += cart[i].price * cart[i].qt
            

			
			let cartItem = seleciona('.models .cart--item').cloneNode(true)
			seleciona('.cart').append(cartItem)

			let CavalosizeName = cart[i].size

			let cavaloName = `${cavaloItem.name} (${CavalosizeName})`

			
			cartItem.querySelector('img').src = cavaloItem.img
			cartItem.querySelector('.cart--item-nome').innerHTML = cavaloName
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt

			
			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				
				cart[i].qt++
				
				atualizarCarrinho()
			})

			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cart[i].qt > 1) {
					
					cart[i].qt--
				} else {
					
					cart.splice(i, 1)
				}

                (cart.length < 1) ? seleciona('header').style.display = 'flex' : ''

				
				atualizarCarrinho()
			})

			seleciona('.cart').append(cartItem)

		}

		
		desconto = subtotal * 0
		total = subtotal - desconto

		
		seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
		seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto)
        
		seleciona('.total span:last-child').innerHTML    = formatoReal(total)

	} else {
		
		seleciona('aside').classList.remove('show')
		seleciona('aside').style.left = '100vw'
	}
}

const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}


cavaloJson.map((item, index ) => {
    
    let cavaloItem = document.querySelector('.models .cavalo-item').cloneNode(true)
    
    seleciona('.cavalo-area').append(cavaloItem)

    
    preencheDadosDasCavalos(cavaloItem, item, index)
    
   
    cavaloItem.querySelector('.cavalo-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na cavalo')

       
        let chave = pegarKey(e)
        

       
        abrirModal()

      
        preencheDadosModal(item)

   
        preencherTamanhos(chave)

	
		seleciona('.cavaloInfo--qt').innerHTML = quantCavalos

        
        escolherTamanhoPreco(chave)
        

    })

    botoesFechar()

}) 


mudarQuantidade()

adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
finalizarCompra()

