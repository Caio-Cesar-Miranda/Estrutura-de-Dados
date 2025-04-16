class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class No {
    constructor(pessoa) {
        this.dado = pessoa;
        this.proximo = null;
    }
};

export default Pessoa;