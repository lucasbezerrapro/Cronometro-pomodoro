let minutos = 24;
let segundos = 60;
let cronometro;

function iniciarCronometro() {
  cronometro = setInterval(function () {
    segundos -= 1;
    if (segundos < 0) {
      if (minutos <= 0) {
        if (document.getElementById("titulo").innerHTML === 'Desanse 5 minutos') {
          minutos = 25;
          segundos = 0;
          document.getElementById("titulo").innerHTML = 'Volte a estudar:';
        } else {
          minutos = 4;
          segundos = 60;
          document.getElementById("titulo").innerHTML = 'Desanse 5 minutos';
        }
      } else {
        minutos -= 1;
        segundos = 59;
      }
    }
    document.getElementById("minutos").innerHTML = `${minutos}`;
    document.getElementById("segundos").innerHTML = `: ${segundos}`;
    document.getElementById("iniciar").style.display = 'none'
    document.getElementById("iniciarDisabled").style.display = 'block'
    
  }, 1000);
}

function pararCronometro() {
  clearInterval(cronometro);
  minutos = 24;
  segundos = 60;
  document.getElementById("minutos").innerHTML = `${'25'}`;
  document.getElementById("segundos").innerHTML = `: ${'00'}`;
  document.getElementById("iniciar").style.display = 'block'
  document.getElementById("iniciarDisabled").style.display = 'none'



}