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

    toString() {
        let atual = this.head;
        let resultado = "";
        while (atual !== null) {
            resultado += atual.dado + " ";
            atual = atual.proximo;
        }
        return resultado.trim();
    }

    shuffleManual() {
        let dados = [];
        let atual = this.head;
        while (atual !== null) {
            dados.push(atual.dado);
            atual = atual.proximo;
        }

        
        for (let i = dados.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = dados[i];
            dados[i] = dados[j];
            dados[j] = temp;
        }

    
        atual = this.head;
        let i = 0;
        while (atual !== null) {
            atual.dado = dados[i];
            atual = atual.proximo;
            i++;
        }
    }
}

export default ListaSimples;
