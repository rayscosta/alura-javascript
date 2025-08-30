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

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
};

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0]
};

console.log(dadosEnvio);