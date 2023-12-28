let minutos = 24;
let segundos = 60;
let click = 0;
let cronometro;
let cronometroAtivo = false;

function iniciarCronometro() {
	
	if(click > 0) {
		alert("Cliques multiplos desabilitados! Clique uma vez apenas :(");
		clearInterval(cronometro);
	}
	click++;

	cronometroAtivo = true //Ativar o  cronômetro

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

    let iniciarBotao = document.getElementById("iniciar");
	iniciarBotao.disabled = true;
	iniciarBotao.style.backgroundColor = 'gray';
    
	document.getElementById("iniciarDisabled").style.display = 'block'
    
  }, 1000);
}

function pararCronometro() {
  if(cronometroAtivo) {
	clearInterval(cronometro);
	
	cronometroAtivo = false;
	
	minutos = 24;
	
	segundos = 60;
	
	document.getElementById("minutos").innerHTML = `${'25'}`;
	
	document.getElementById("segundos").innerHTML = `: ${'00'}`;
	
	let desabilitarBotao = document.getElementById("iniciar")
	
	desabilitarBotao.disabled= false;
	
	desabilitarBotao.style.backgroundColor='#adff2f';

	desabilitarBotao.style.color ='#204b02';

	click = 0;	
  }



}