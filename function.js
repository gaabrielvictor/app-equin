const navBar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');

navBar.addEventListener('click', () =>{
    navBar.classList.toggle('active');
    navMenu.classList.toggle('active');
})


let tempoAtual = 259200;

function atualizarContador() {
  
  tempoAtual--;

  let dias = Math.floor(tempoAtual / (24 * 3600));
  let horas = Math.floor((tempoAtual - (dias * 24 * 3600)) / 3600);
  let minutos = Math.floor((tempoAtual - (dias * 24 * 3600) - (horas * 3600)) / 60);
  let segundos = tempoAtual - (dias * 24 * 3600) - (horas * 3600) - (minutos * 60);

  dias = String(dias).padStart(2, '0');
  horas = String(horas).padStart(2, '0');
  minutos = String(minutos).padStart(2, '0');
  segundos = String(segundos).padStart(2, '0');

  document.getElementById('contador').textContent = dias + 'd:' + horas + ':' + minutos + ':' + segundos;

  if (tempoAtual <= 0) {
    clearInterval(intervalo);
    document.getElementById('contador').textContent = 'Tempo acabou!';
  }
}

let intervalo = setInterval(atualizarContador, 1000);

let tempoAtual2 = 1296000;

function atualizarContador2() {
  tempoAtual2--;
  
  let dias2 = Math.floor(tempoAtual2 / (24 * 3600));
  let horas2 = Math.floor((tempoAtual2 - (dias2 * 24 * 3600)) / 3600);
  let minutos2 = Math.floor((tempoAtual2 - (dias2 * 24 * 3600) - (horas2 * 3600)) / 60);
  let segundos2 = tempoAtual2 - (dias2 * 24 * 3600) - (horas2 * 3600) - (minutos2 * 60);

  dias2 = String(dias2).padStart(2, '0');
  horas2 = String(horas2).padStart(2, '0');
  minutos2 = String(minutos2).padStart(2, '0');
  segundos2 = String(segundos2).padStart(2, '0');

  document.getElementById('contador2').textContent = dias2 +'d:' + horas2 + ':' + minutos2 + ':' + segundos2;

  if (tempoAtual2 <= 0) {
    clearInterval(intervalo2);
    document.getElementById('contador2').textContent = 'Tempo acabou!';
  }
}

let intervalo2 = setInterval(atualizarContador2, 1000)

let tempoAtual3 = 3014000;

function atualizarContador3() {
  tempoAtual3--;
  
  let dias3 = Math.floor(tempoAtual3 / (24 * 3600));
  let horas3 = Math.floor((tempoAtual3 - (dias3 * 24 * 3600)) / 3600);
  let minutos3 = Math.floor((tempoAtual3 - (dias3 * 24 * 3600) - (horas3 * 3600)) / 60);
  let segundos3 = tempoAtual3 - (dias3 * 24 * 3600) - (horas3 * 3600) - (minutos3 * 60);

  dias3 = String(dias3).padStart(2, '0');
  horas3 = String(horas3).padStart(2, '0');
  minutos3 = String(minutos3).padStart(2, '0');
  segundos3 = String(segundos3).padStart(2, '0');

  document.getElementById('contador3').textContent = dias3 +'d:' + horas3 + ':' + minutos3 + ':' + segundos3;

  if (tempoAtual3 <= 0) {
    clearInterval(intervalo3);
    document.getElementById('contador3').textContent = 'Tempo acabou!';
  }
}

let intervalo3 = setInterval(atualizarContador3, 1000)

let tempoAtual4 = 9676800;

function atualizarContador4() {
  tempoAtual4--;
  
  let dias4 = Math.floor(tempoAtual4 / (24 * 3600));
  let horas4 = Math.floor((tempoAtual4 - (dias4 * 24 * 3600)) / 3600);
  let minutos4 = Math.floor((tempoAtual4 - (dias4 * 24 * 3600) - (horas4 * 3600)) / 60);
  let segundos4 = tempoAtual4 - (dias4 * 24 * 3600) - (horas4 * 3600) - (minutos4 * 60);

  dias4 = String(dias4).padStart(2, '0');
  horas4 = String(horas4).padStart(2, '0');
  minutos4 = String(minutos4).padStart(2, '0');
  segundos4 = String(segundos4).padStart(2, '0');

  document.getElementById('contador4').textContent = dias4 +'d:' + horas4 + ':' + minutos4 + ':' + segundos4;

  if (tempoAtual4 <= 0) {
    clearInterval(intervalo4);
    document.getElementById('contador4').textContent = 'Tempo acabou!';
  }
}

let intervalo4 = setInterval(atualizarContador4, 1000)

let tempoAtual5 = 6225600;

function atualizarContador5() {
  tempoAtual5--;
  
  let dias5 = Math.floor(tempoAtual5 / (24 * 3600));
  let horas5 = Math.floor((tempoAtual5 - (dias5 * 24 * 3600)) / 3600);
  let minutos5 = Math.floor((tempoAtual5 - (dias5 * 24 * 3600) - (horas5 * 3600)) / 60);
  let segundos5 = tempoAtual5 - (dias5 * 24 * 3600) - (horas5 * 3600) - (minutos5 * 60);

  dias5 = String(dias5).padStart(2, '0');
  horas5 = String(horas5).padStart(2, '0');
  minutos5 = String(minutos5).padStart(2, '0');
  segundos5 = String(segundos5).padStart(2, '0');

  document.getElementById('contador5').textContent = dias5 +'d:' + horas5 + ':' + minutos5 + ':' + segundos5;

  if (tempoAtual5 <= 0) {
    clearInterval(intervalo5);
    document.getElementById('contador5').textContent = 'Tempo acabou!';
  }
}

let intervalo5 = setInterval(atualizarContador5, 1000)

let tempoAtual6 = 1036800;

function atualizarContador6() {
  tempoAtual6--;
  
  let dias6 = Math.floor(tempoAtual6 / (24 * 3600));
  let horas6 = Math.floor((tempoAtual6 - (dias6 * 24 * 3600)) / 3600);
  let minutos6 = Math.floor((tempoAtual6 - (dias6 * 24 * 3600) - (horas6 * 3600)) / 60);
  let segundos6 = tempoAtual6 - (dias6 * 24 * 3600) - (horas6 * 3600) - (minutos6 * 60);

  dias6 = String(dias6).padStart(2, '0');
  horas6 = String(horas6).padStart(2, '0');
  minutos6 = String(minutos6).padStart(2, '0');
  segundos6 = String(segundos6).padStart(2, '0');

  document.getElementById('contador6').textContent = dias6 +'d:' + horas6 + ':' + minutos6 + ':' + segundos6;

  if (tempoAtual6 <= 0) {
    clearInterval(intervalo6);
    document.getElementById('contador6').textContent = 'Tempo acabou!';
  }
}

let intervalo6 = setInterval(atualizarContador6, 1000)

let tempoAtual7 = 7084800;

function atualizarContador7() {
  tempoAtual7--;
  
  let dias7 = Math.floor(tempoAtual7 / (24 * 3600));
  let horas7 = Math.floor((tempoAtual7 - (dias7 * 24 * 3600)) / 3600);
  let minutos7 = Math.floor((tempoAtual7 - (dias7 * 24 * 3600) - (horas7 * 3600)) / 60);
  let segundos7 = tempoAtual7 - (dias7 * 24 * 3600) - (horas7 * 3600) - (minutos7 * 60);

  dias7 = String(dias7).padStart(2, '0');
  horas7 = String(horas7).padStart(2, '0');
  minutos7 = String(minutos7).padStart(2, '0');
  segundos7 = String(segundos7).padStart(2, '0');

  document.getElementById('contador7').textContent = dias7 +'d:' + horas7 + ':' + minutos7 + ':' + segundos7;

  if (tempoAtual7 <= 0) {
    clearInterval(intervalo7);
    document.getElementById('contador7').textContent = 'Tempo acabou!';
  }
}

let intervalo7 = setInterval(atualizarContador7, 1000)

let tempoAtual8 = 8899200;

function atualizarContador8() {
  tempoAtual8--;
  
  let dias8 = Math.floor(tempoAtual8 / (24 * 3600));
  let horas8 = Math.floor((tempoAtual8 - (dias8 * 24 * 3600)) / 3600);
  let minutos8 = Math.floor((tempoAtual8 - (dias8 * 24 * 3600) - (horas8 * 3600)) / 60);
  let segundos8 = tempoAtual8 - (dias8 * 24 * 3600) - (horas8 * 3600) - (minutos8 * 60);

  dias8 = String(dias8).padStart(2, '0');
  horas8 = String(horas8).padStart(2, '0');
  minutos8 = String(minutos8).padStart(2, '0');
  segundos8 = String(segundos8).padStart(2, '0');

  document.getElementById('contador8').textContent = dias8 +'d:' + horas8 + ':' + minutos8 + ':' + segundos8;

  if (tempoAtual8 <= 0) {
    clearInterval(intervalo8);
    document.getElementById('contador8').textContent = 'Tempo acabou!';
  }
}

let intervalo8 = setInterval(atualizarContador8, 1000)

var contadorElemento = document.getElementById("numero");
var numero = 0;

function aumentar() {
  numero++;
  contadorElemento.innerText = numero;
}
function zerar() {
  numero = 0;
  contadorElemento.innerText = numero;
}

function notificaLeilao(){
  if (window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification ('O leilão começa em breve... ',{
      body: 'Você será notificado quando o leilão começar !'
    })
    })
  }
}

var contadorElemento = document.getElementById("numero");
var numero = 0;

const button1 = document.querySelector('.btn0')
const modal = document.querySelector('dialog')
const buttonCLose = document.querySelector('.btnClose')

button1.onclick = function zerar (){
  modal.show()
  numero = 0;
  contadorElemento.innerText = numero;
}
buttonCLose.onclick = function () {
  modal.close()
}


const button = document.querySelector('.btn1')
const popup = document.querySelector('.popup-wrapper')
const popupMain = document.querySelector('.popup')



button.addEventListener('click', () => {
popup.style.display = 'block'
popupMain.style.display = 'block'
console.log('popup')
})

popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
})


function funcaoLance()
{
  alert("Lance dado com sucesso!");
}

