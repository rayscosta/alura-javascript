const estudante = {
    nome: 'Iago',
    idade: 22,
    cpf: '123.456.789-00',
    turma: 'JavaScript',
};

function acessarPropriedade(objeto, propriedade) {
    return objeto[propriedade];
}

console.log(acessarPropriedade(estudante, 'nome'));