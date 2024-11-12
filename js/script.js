var btnJugada = document.querySelectorAll(".boton-jugada")
var contadorUsuario = document.getElementById("contador-usuario")
var contadorOrdenador = document.getElementById("contador-ordenador")
var resultados = document.getElementById("resultados")
var optionsList = ['piedra', 'papel', 'tijera']

var ptsUsuario = 0
var ptsOrdenador = 0

btnJugada.forEach(function(boton) {

    boton.addEventListener('click', () => {
        var jugadaUsuario = boton.getAttribute("data-jugada")
        
        let rnd = Math.random();
        let numAlea = Math.floor(rnd*(optionsList.length))
        
        var jugadaOrdenador = optionsList[numAlea]
        
        resultados.innerHTML = "<p>Usuario : " + jugadaUsuario + " --- Ordenador : " + jugadaOrdenador + "</p>"
        
        if(jugadaOrdenador == jugadaUsuario){
            actualizarMarcadorUsuario()        
            actualizarMarcadorOrdenador()        
        }else if((jugadaOrdenador == "piedra" && jugadaUsuario == "tijera") || (jugadaOrdenador == "tijera" && jugadaUsuario == "papel") || (jugadaOrdenador == "papel" && jugadaUsuario == "piedra")) {
            actualizarMarcadorOrdenador()
        }else{
            actualizarMarcadorUsuario()
        }
    })

});


function actualizarMarcadorUsuario(){
    ptsUsuario += 1
    contadorUsuario.innerText = "Tus puntos: " + ptsUsuario
}

function actualizarMarcadorOrdenador(){
    ptsOrdenador += 1
    contadorOrdenador.innerText = "Puntos de la máquina: " + ptsOrdenador
}