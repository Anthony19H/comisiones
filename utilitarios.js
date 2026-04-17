function recuperartexto(idComponete) {

    let componente = document.getElementById(idComponete);
    let valor = componente.value;

    return valor;
}

function recuperarFloat(idcomponente){

    let valorTexto = recuperartexto(idcomponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}
