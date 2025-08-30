const estudante = {
    nome: 'Iago',
    idade: 22,
    cpf: '123.456.789-00',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['11 98765-4321', '11 98765-4322']
};

estudante.endereco = {
    logradouro: 'Rua dos Bobos',
    numero: 0,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP'
}

console.log(estudante.endereco.logradouro);