let votos ={
    diseño: 0,
    javascript: 0,
    basesdedatos: 0
};

let contadorVotos = 0;

function votar(opcion){
    votos[opcion]++;

    contadorVotos++;

    let idSpan;

    if (opcion === `diseño`){
        idSpan = `votosDiseño`
    }else if (opcion === `javascript`) {
        idSpan = `votosJavascript`
    } else {
        idSpan = `votosBasesDeDatos`
    }
    
    document.getElementById(idSpan).textContent = votos[opcion];

    document.getElementById(`totalVotos`).textContent = contadorVotos;

    alert("Gracias por tu voto");

    if (contadorVotos % 5 === 0){
        console.log("Reporte de votos acumulados (cada 5 votos)")
        console.log("Diseño Web", votos.diseño)
        console.log("Javascipt", votos.javascript)
        console.log("Bases de Datos", votos.basesdedatos)
        console.log("Total votos acumulados", contadorVotos)
    };
};