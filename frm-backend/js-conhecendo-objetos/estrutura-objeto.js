const estudante = {
    nome: 'João',
    idade: 25,
    CPF: '123.456.789-10',
    "turma": "Javascript"
};

console.log(estudante.nome); // João
console.log(`O nome do estudadnte é: ${estudante.nome}`); // 25
console.log(`Os 3 primeiros digitos do CPF são: ${estudante.CPF.substring(0,4)}`); // 123.456.789-10