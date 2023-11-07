let minutos = 24;
let segundos = 60;
let cronometro;

function iniciarCronometro() {
  cronometro = setInterval(function () {
      segundos -=1
      if (segundos <= 0) {
        clearInterval(segundos)
        segundos=60
        minutos--
      } else {
        document.getElementById("minutos").innerHTML = `${minutos} `
        document.getElementById("segundos").innerHTML = `: ${segundos}`
        }
      }, 1000)
    }

function pararCronometro() {
  minutos=25
  segundos=60
  document.getElementById("minutos").innerHTML = `${minutos}`
  document.getElementById("segundos").innerHTML = `: ${segundos}`

  clearInterval(cronometro)
}