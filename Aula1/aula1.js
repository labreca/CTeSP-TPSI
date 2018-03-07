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


    mesPorExtenso(12);

    calculadora(2, 3, "+");

    multiplosDeCinco(5);

    somaPrimeirosCemInteiros(100);

    var fact = factorialDeNumero(5);
    console.log("O factorial de " + 5 + " é: " + fact);

    // alinea 6
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

//alínea 7
function calculadora(a, b, op) {
    var resultado
    if (op == "+") {
        resultado = a + b;
    }
    else if (op == "-") {
        resultado = a - b;
    }
    else if (op == "/") {
        resultado = a / b;
    }
    else if (op == "*") {
        resultado = a * b;
    }
    else if (op == "*") {
        resultado = Math.pow(a, b);
    }
    else {
        resultado = "nada";
    }
    console.log(resultado);
}

//alinea 8
function multiplosDeCinco(n) {
    for (i = 1; i < 20; i++) {
        if (i % n == 0) {
            console.log(i);
        }
    }
}

//alinea 9
function somaPrimeirosCemInteiros (n) {
    var som = 0;
    for (i = 1; i <= n; i++) {
        som = som + i;
    }
    console.log(som);
}

//alinea 10
function factorialDeNumero (n) {
    var fact=1;
    for (i=n; i>0; i--) {
        fact*=i;
    }
    return fact;
}





main();
