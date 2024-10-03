// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
function imprimeArray() {
    let arrayAleatorio = ['oi', 'rai', 'amor', 1000, 'testes'];
    arrayAleatorio.forEach((elemento, indice) => console.log(`${indice}: ${elemento}`))
}

/*2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.*/
let arrayNumerico = [3, 5, 7, 9, 199, 44, 34, 80];
function executaOperacaoEmArray(array, potencia) {
    array.forEach(potencia);
}

function potencia(elemento) {
    let potencia = elemento * elemento;
    console.log(potencia);
}

//executaOperacaoEmArray(arrayNumerico, potencia);

/* Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.*/
function concatArray() {
    const nomesTurmaA = [
      'João Silva',
      'Maria Santos',
      'Pedro Almeida'
    ];
    
    const nomesTurmaB = [
      'Carlos Oliveira',
      'Ana Souza',
      'Lucas Fernandes'
    ];
    const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
    console.log(todosAlunos);
}

function findArray(aluno) {
    const nomesTurmaA = [
        'João Silva',
        'Maria Santos',
        'Pedro Almeida'
    ];
    
    const nomesTurmaB = [
        'Carlos Oliveira',
        'Ana Souza',
        'Lucas Fernandes'
    ];
    const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
    if (todosAlunos.indexOf(aluno) !== -1) {
        console.log(`Aluno encontrado: ${aluno}`);
    } else {
        console.log(`Aluno não encontrado`);
    }
}
//findArray('João Silva');

/* Utilizando o método filter*/
function filterArray() {
    const nomesTurmaA = [
        'João Silva',
        'Maria Santos',
        'Pedro Almeida'
    ];
    const notas = [
        7,
        4.5,
        8,
        7.5
    ];
    const reprovados = nomesTurmaA.filter((_, indice) => {
        return notas[indice] < 7;
    });
    console.log(reprovados);
};

// filterArray();
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];
const notas = [
    7,
    4,
    8,
    5,
    6,
    12,
    3
];
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];
function concatArraySpread(arr1, arr2, arr3) {
    const arrFinal = [...arr1, ...arr2, ...arr3]
    console.log(arrFinal);
    return arrFinal;
}

// concatArraySpread(nomesTurmaA, nomesTurmaB, notas);

// function arrayNumerosPares(arrayNumerosPares) {
//     const listaNumerosPares = arrayNumerosPares.filter((num) => {
//         return num % 2 === 0;
//     });
//     return listaNumerosPares;
// }

function arrayNumerosPares(arrayNumerosPares) {
    return arrayNumerosPares.filter(num => num % 2 === 0
    );
}

console.log(arrayNumerosPares(notas))