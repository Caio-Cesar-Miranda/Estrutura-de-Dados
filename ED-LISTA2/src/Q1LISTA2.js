import Fila from "./Fila";

class PilhaComFilas{
    constructor(tamanho = 5){
        this.f1 = new Fila(tamanho);
        this.f2 = new Fila(tamanho);
    }

    push(elemento){
        this.f2.enqueue(elemento);

        while(!this.f1.isEmpty()){
            this.f2.enqueue(this.f1.front());
            this.f1.dequeue();
        }

        const temp = this.f1;
        this.f1 = this.f2;
        this.f2 = temp;
    }

    pop(){
        if(this.isEmpty()) throw new Error("Pilha vazia");
        const elemento = this.f1.front();
        this.f1.dequeue();
        return elemento;
    }

    top(){
        if(this.isEmpty()) throw new Error("Pilha vazia");
        return this.f1.front();
    }

    isEmpty(){
        return this.f1.isEmpty();
    }

    clear(){
        this.f1.clear();
        this.f2.clear();
    }
}

export default PilhaComFilas;