import No from "./No";

class ListaPessoas {
    constructor() {
        this.head = null;
    }

    adicionar(pessoa) {
        const novo = new No(pessoa);
        if (this.head === null) {
            this.head = novo;
        } else {
            let atual = this.head;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novo;
        }
    }

    copiarParaArray() {
        let atual = this.head;
        const array = [];
        while (atual !== null) {
            array.push(atual.dado);
            atual = atual.proximo;
        }
        return array;
    }

    ordenarPorNome() {
        const array = this.copiarParaArray();

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].nome > array[j].nome) {
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return ListaPessoas.fromArray(array);
    }

    ordenarPorIdade() {
        const array = this.copiarParaArray();
        
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].idade > array[j].idade) {
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return ListaPessoas.fromArray(array);
    }

    static fromArray(array) {
        const novaLista = new ListaPessoas();
        for (let i = 0; i < array.length; i++) {
            novaLista.adicionar(array[i]);
        }
        return novaLista;
    }

    toArraySimples() {
        const resultado = [];
        let atual = this.head;
        while (atual !== null) {
            resultado.push({ nome: atual.dado.nome, idade: atual.dado.idade });
            atual = atual.proximo;
        }
        return resultado;
    }
}

export default ListaPessoas;
