class Deque {
    constructor(size = 10) {
        this.dado = new Array(size + 1); 
        this.size = size;
        this.inicio = 0;
        this.fim = 0;
    }

    isEmpty() {
        return this.inicio === this.fim;
    }

    isFull() {
        return (this.fim + 1) % (this.size + 1) === this.inicio;
    }

    inserirInicio(valor) {
        if (this.isFull()) throw new Error("Deque cheio!");
        this.inicio = (this.inicio - 1 + this.size + 1) % (this.size + 1);
        this.dado[this.inicio] = valor;
    }

    removerInicio() {
        if (this.isEmpty()) throw new Error("Deque vazio!");
        const valor = this.dado[this.inicio];
        this.inicio = (this.inicio + 1) % (this.size + 1);
        return valor;
    }

    inserirFim(valor) {
        if (this.isFull()) throw new Error("Deque cheio!");
        this.dado[this.fim] = valor;
        this.fim = (this.fim + 1) % (this.size + 1);
    }

    removerFim() {
        if (this.isEmpty()) throw new Error("Deque vazio!");
        this.fim = (this.fim - 1 + this.size + 1) % (this.size + 1);
        return this.dado[this.fim];
    }

    listar() {
        const lista = [];
        let pos = this.inicio;
        while (pos !== this.fim) {
            lista.push(this.dado[pos]);
            pos = (pos + 1) % (this.size + 1);
        }
        return lista;
    }
}

export default Deque;
