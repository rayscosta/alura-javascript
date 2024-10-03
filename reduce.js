const salaJs = [7, 8, 8, 9, 7, 7, 9, 4.5, 10, 6, 5];
const salaJava = [7, 8, 8, 9, 7, 7, 9];
const salaPython = [7, 8, 3, 6, 7, 7, 8];

function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calculaMedia(salaJs));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));
