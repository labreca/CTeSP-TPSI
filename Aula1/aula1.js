function notaFinal(notaP1, notaP2, notaPF) {
    return notaFinal = (notaP1 * 0.3 + notaP2 * 0.3 + notaPF * 0.4);
}
function main() {
    
    // alinea 5    
    var notaF = notaFinal(12, 13, 14);
    if (notaF < 9.5) {
        console.log("Reprovado");
    }
    else {
        console.log("Aprovado");
    }

    // alinea 6
    mesPorExtenso(13);

}
function mesPorExtenso(mes) {
    var mesPorExtenso
    switch (mes) {
        case 1:
            console.log("Janeiro")
            break;
        case 2:
            console.log("Fevereiro")
            break;
        case 3:
            console.log("Março")
            break;
        case 4:
            console.log("Abril")
            break;
        case 5:
            console.log("Maio")
            break;
        case 6:
            console.log("Junho")
            break;
        case 7:
            console.log("Julho")
            break;
        case 8:
            console.log("Agosto")
            break;
        case 9:
            console.log("Setembro")
            break;
        case 10:
            console.log("Outubro")
            break;
        case 11:
            console.log("Novembro")
            break;
        case 12:
            console.log("Dezembro")
            break;
        default:
            console.log("Valor Inválido!")
    }

}

main();
