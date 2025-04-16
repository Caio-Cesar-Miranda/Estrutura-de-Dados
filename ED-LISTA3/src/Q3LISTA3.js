import No from "./No";

class ListaSimples {
    constructor() {
        this.itens = new Array(100);
        this.tamanho = 0;
    }

    addFim(dado) {
        this.itens[this.tamanho] = new No(dado);
        this.tamanho++;
    }

    addInicio(dado) {
        for (let i = this.tamanho; i > 0; i--) {
            this.itens[i] = this.itens[i - 1];
        }
        this.itens[0] = new No(dado);
        this.tamanho++;
    }

    addEm(dado, posicao) {
        if (posicao < 0 || posicao > this.tamanho) {
            throw new Error("Posição inválida.");
        }

        for (let i = this.tamanho; i > posicao; i--) {
            this.itens[i] = this.itens[i - 1];
        }

        this.itens[posicao] = new No(dado);
        this.tamanho++;
    }

    removeInicio() {
        if (this.isEmpty()) throw new Error("Lista vazia.");
        const removido = this.itens[0];
        for (let i = 0; i < this.tamanho - 1; i++) {
            this.itens[i] = this.itens[i + 1];
        }
        this.tamanho--;
        return removido;
    }

    removeFim() {
        if (this.isEmpty()) throw new Error("Lista vazia.");
        this.tamanho--;
        return this.itens[this.tamanho];
    }

    removeEm(posicao) {
        if (posicao < 0 || posicao >= this.tamanho) {
            throw new Error("Posição inválida.");
        }
        const removido = this.itens[posicao];
        for (let i = posicao; i < this.tamanho - 1; i++) {
            this.itens[i] = this.itens[i + 1];
        }
        this.tamanho--;
        return removido;
    }

    buscar(dado) {
        for (let i = 0; i < this.tamanho; i++) {
            if (this.itens[i].dado === dado) {
                return this.itens[i];
            }
        }
        return null;
    }

    isEmpty() {
        return this.tamanho === 0;
    }

    size() {
        return this.tamanho;
    }

    toString() {
        let resultado = "";
        for (let i = 0; i < this.tamanho; i++) {
            resultado += this.itens[i].dado + " ";
        }
        return resultado.trim();
    }
}

export default ListaSimples;
