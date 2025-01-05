const estudante = {
    nome: 'Iago',
    idade: 22,
    cpf: '123.456.789-00',
    turma: 'JavaScript',
};

estudante.telefone = '11 98765-4321';
console.log(estudante);
console.log(estudante.telefone);

estudante.nome = 'João';
console.log(estudante);

delete estudante.cpf;
console.log(estudante);
