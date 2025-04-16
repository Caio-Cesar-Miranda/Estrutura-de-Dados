import No from "./No.js";

class ListaString {
    constructor() {
        this.head = null;
    }

    
    fromString(str) {
        for (let i = 0; i < str.length; i++) {
            this.addFim(str[i]);
        }
    }

    addFim(caractere) {
        const novoNo = new No(caractere);
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
        let resultado = "";
        let atual = this.head;
        while (atual !== null) {
            resultado += atual.dado;
            atual = atual.proximo;
        }
        return resultado;
    }

    substring(a, b) {
        const novaLista = new ListaString();
        let atual = this.head;
        let pos = 0;
        while (atual !== null) {
            if (pos >= a && pos <= b) {
                novaLista.addFim(atual.dado);
            }
            atual = atual.proximo;
            pos++;
        }
        return novaLista;
    }
}

export default ListaString;
