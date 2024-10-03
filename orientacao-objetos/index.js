class Cliente {
    constructor(nome, cpf, agencia, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        
    }
}

class ContaCorrente {
    constructor(cliente, numero, agencia, saldo) {
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = cliente;
        this.numero = numero;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    depositar(valor) {
        this.saldo += valor;
    }
}