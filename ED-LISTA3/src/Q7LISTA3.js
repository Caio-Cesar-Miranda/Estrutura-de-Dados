class Soldado {
    constructor(id) {
        this.id = id;
        this.proximo = null;
    }
}

class Josephus {
    constructor(n, d) {
        this.n = n;
        this.d = d;
        this.inicio = this.criarListaCircular(n);
    }

    criarListaCircular(n) {
        let primeiro = new Soldado(1);
        let atual = primeiro;

        for (let i = 2; i <= n; i++) {
            atual.proximo = new Soldado(i);
            atual = atual.proximo;
        }

        atual.proximo = primeiro; // Fecha o círculo
        return primeiro;
    }

    executar() {
        let atual = this.inicio;
        const eliminados = [];

        while (atual !== atual.proximo) {
            for (let i = 1; i < this.d - 1; i++) {
                atual = atual.proximo;
            }

            
            const eliminado = atual.proximo;
            eliminados.push(eliminado.id);

        
            atual.proximo = eliminado.proximo;

            
            atual = atual.proximo;
        }

        return {
            eliminados,
            sobrevivente: atual.id
        };
    }
}

export default Josephus;
