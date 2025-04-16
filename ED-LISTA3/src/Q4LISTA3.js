import No from "./No.js";

class ListaSimples {
    constructor() {
        this.head = null;
    }

    addFim(dado) {
        const novoNo = new No(dado);
        if (!this.head) {
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    inverter() {
        let anterior = null;
        let atual = this.head;
        let proximo = null;

        while (atual !== null) {
            proximo = atual.proximo;
            atual.proximo = anterior;
            anterior = atual;
            atual = proximo;
        }
        this.head = anterior; 
    }

    toString() {
        let resultado = "";
        let atual = this.head;
        while (atual !== null) {
            resultado += atual.dado + " ";
            atual = atual.proximo;
        }
        return resultado.trim();
    }
}

export default ListaSimples;
