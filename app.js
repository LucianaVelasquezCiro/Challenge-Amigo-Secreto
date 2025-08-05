// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function validarEntrada(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo.trim().length === 0){
        alert("El campo está vacío");
    }else{
        listaAmigos.push(nombreAmigo);
        limpiarCampo();
        mostrarNombresLista();
    }
}

function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

function mostrarNombresLista(){
    let mostrarLista = document.querySelector('#listaAmigos');
    mostrarLista.innerHTML = '';
    listaAmigos.forEach((amigo) => {
    mostrarLista.innerHTML += `<li>${amigo}</li>`;
    });
}

function numeroRandom(){
    let num = Math.floor(Math.random()*listaAmigos.length)+1
    return num;
}

function sortearAmigo(){
    if(listaAmigos.length <=1){
        alert("No hay suficientes participantes para el sorteo");
    }else{
        let indice = numeroRandom();
        let amigoSecreto = listaAmigos[indice-1];
        document.querySelector('#resultado').innerHTML = amigoSecreto;
    }
}

