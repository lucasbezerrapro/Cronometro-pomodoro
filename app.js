class Cronometro {
	constructor() {
	  this.minutos = 24;
	  this.segundos = 60;
	  this.menosMinutos = 0;
	  this.menosSegundos = 0;
	  this.click;
	  this.cronometroAtivo = false;
	  this.cronometroInterval = null;
	}
  
	
  
	iniciarCronometro() {
	  if (this.click > 0) {
		alert("Cliques múltiplos desabilitados! Clique uma vez apenas :(");
		clearInterval(this.cronometroInterval);
	  }
	  this.click++;
  
	  this.cronometroAtivo = true;
  
	  this.cronometroInterval = setInterval(() => {
		this.segundos -= 1;
		if (this.segundos < 0) {
		  if (this.minutos <= 0) {
			// Lógica para alternar entre os modos de estudo e descanso
			if (document.getElementById("titulo").innerHTML === "Desanse 5 minutos") {
			  this.minutos = 25;
			  this.segundos = 0;
			  document.getElementById("titulo").innerHTML = "Volte a estudar:";
			} else {
			  this.minutos = 4;
			  this.segundos = 60;
			  document.getElementById("titulo").innerHTML = "Desanse 5 minutos";
			}
		  } else {
			this.minutos -= 1;
			this.segundos = 59;
		  }
		}
  
		this.atualizarDisplay();
  
		// Lógica para desabilitar o botão de iniciar
		document.getElementById("iniciar").disabled = true;
		document.getElementById("iniciar").style.backgroundColor = "gray";
		document.getElementById("iniciarDisabled").style.display = "block";
		
  
	  }, 1000);
	}
  
	pararCronometro() {
	  if (this.cronometroAtivo) {
		clearInterval(this.cronometroInterval);
		this.cronometroAtivo = false;
  
		// Resetar valores e atualizar display
		this.minutos = 25;
		this.segundos = 0;

		this.atualizarDisplay();
  
		// Lógica para habilitar o botão de iniciar
		document.getElementById("iniciar").disabled = false;
		document.getElementById("iniciar").style.backgroundColor = "#59cf86";
		document.getElementById("iniciar").style.color = "#fff";
		document.getElementById("iniciarDisabled").style.display = "none";
  
		this.click = 0;
	  }
	}
	
	
	// Adicione métodos adicionais conforme necessário
  
	atualizarDisplay() {
	  // Atualizar o display com os valores de minutos e segundos
	  document.getElementById("minutos").innerHTML = `${this.minutos}`;
	  document.getElementById("segundos").innerHTML = `: ${this.segundos}`;
	}
  }
  
  // Criar uma instância da classe Cronometro
  const cronometro = new Cronometro();
  
  // Configurar intervalos para atualização de minutos e segundos
  const intervaloMinuto = setInterval(() => cronometro.atualizarMinutos(), 1000);
  const intervaloSegundo = setInterval(() => cronometro.atualizarSegundos(), 1000);
  
  function iniciarCronometroClick() {
	cronometro.iniciarCronometro();
  }

  document.getElementById('iniciar').addEventListener('click', function(){
	iniciarCronometroClick();
	console.log('iniciou cronometro');
  });
  
  function pararCronometroClick() {
	cronometro.pararCronometro();
  }

  document.getElementById('parar').addEventListener('click', function(){
	pararCronometroClick();
	console.log('parou cronometro');
  });
  

  const cronometroCurto = new Cronometro();

  function cronometroShort(){
	this.minutos=5;
	thi.segundos=0;
  }

  intervaloMinuto = setInterval(() => cronometroCurto.cronometroShort(), 1000);
  intervaloSegundo = setInterval(() => cronometroCurto.cronometroShort(), 1000);

  function suporte() {
	btn = document.getElementById('suporte')
	btn.onclick= window.location.href = 'https://wa.me/5587981386821?text=Oi%2C+estou+vindo+do+site+do+cronometro.+Podemos+conversar+sobre%3A+%28assunto+do+problema+que+enfrenta+com+o+site%29';
  }