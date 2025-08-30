const estudante = {
    nome: 'Iago',
    idade: 22,
    cpf: '123.456.789-00',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['11 98765-4321', '11 98765-4322'],
    endereco: [{
        logradouro: 'Rua dos Bobos',
        numero: 0,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
    }]
};

estudante.endereco.push({
    logradouro: 'Rua dona clotilde',
    numero: 10,
    bairro: 'Botafogo',
    cidade: 'São Caetano',
    estado: 'SP'
});

console.log(estudante.endereco[0]);
console.log(estudante.endereco[1]);