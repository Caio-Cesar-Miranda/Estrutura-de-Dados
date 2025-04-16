import No from './No.js';

class Fila {
    constructor() {
        this.inicio = null;
        this.fim = null;
    }

    enqueue(dado) {
        const novoNo = new No(dado);
        if (this.isEmpty()) {
            this.inicio = novoNo;
            this.fim = novoNo;
        } else {
            this.fim.proximo = novoNo;
            this.fim = novoNo;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia.");
        }
        const removido = this.inicio.dado;
        this.inicio = this.inicio.proximo;
        if (this.inicio === null) {
            this.fim = null;
        }
        return removido;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia.");
        }
        return this.inicio.dado;
    }

    isEmpty() {
        return this.inicio === null;
    }

    size() {
        let atual = this.inicio;
        let count = 0;
        while (atual !== null) {
            count++;
            atual = atual.proximo;
        }
        return count;
    }

    toString() {
        let atual = this.inicio;
        let resultado = "";
        while (atual !== null) {
            resultado += atual.dado + " ";
            atual = atual.proximo;
        }
        return resultado.trim();
    }
}

export default Fila;
