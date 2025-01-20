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
    },
    {
        logradouro: 'Rua dona clotilde',
        numero: 10,
        bairro: 'Botafogo',
        cidade: 'São Caetano',
        estado: 'SP'
    }]
};

for (const key in estudante) {
    const tipo = typeof estudante[key];
    if (tipo != 'object' && tipo != 'function') {
        const texto = `A chave ${key} tem o valor ${estudante[key]}`;
        console.log(texto);
    } else {
        const texto = `A chave ${key} tem o valor ${JSON.stringify(estudante[key])}`;
        console.log(texto);
    }
        
}