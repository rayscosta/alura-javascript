const estudante = {
    nome: 'Iago',
    idade: 22,
    // cpf: '123.456.789-00',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['11 98765-4321', '11 98765-4322'],
    endereco: [{
        logradouro: 'Rua dos Bobos',
        numero: 0,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
    },
    {
        logradouro: 'Rua dona clotilde',
        numero: 10,
        bairro: 'Botafogo',
        cidade: 'São Caetano',
        estado: 'SP'
    }]
};

const objectKeys = Object.keys(estudante);
console.log(objectKeys);

const objectEntries = Object.entries(estudante);
console.log(objectEntries);

const objectValues = Object.values(estudante);
console.log(objectValues);

if (!objectKeys.includes('cpf')) {
    console.error('O estudante não possui CPF');
}