import No from "./No";

class Pilha {
    constructor() {
        this.topo = null; // Representa o topo da pilha
    }

    push(dado) {
        let novoNo = new No(dado);
        novoNo.proximo = this.topo;
        this.topo = novoNo;
    }

    
    pop() {
        if (this.isEmpty()) {
            throw new Error("Pilha vazia.");
        }

        let dado = this.topo.dado;
        this.topo = this.topo.proximo;
        return dado;
    }

    
    peek() {
        if (this.isEmpty()) {
            throw new Error("Pilha vazia.");
        }

        return this.topo.dado;
    }

    
    isEmpty() {
        return this.topo === null;
    }

    
    size() {
        let contador = 0;
        let atual = this.topo;
        while (atual !== null) {
            contador++;
            atual = atual.proximo;
        }
        return contador;
    }

    
    toString() {
        let atual = this.topo;
        let resultado = "";
        while (atual !== null) {
            resultado += atual.dado + " ";
            atual = atual.proximo;
        }
        return resultado.trim();
    }
}


export default Pilha;
