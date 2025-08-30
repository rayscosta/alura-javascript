const estudante = {
    nome: 'Iago',
    idade: 22,
    cpf: '123.456.789-00',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['11 98765-4321', '11 98765-4322'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? 'Aprovado' : 'Reprovado';
    }
};

console.log(estudante.estaAprovado(7)); // Aprovado