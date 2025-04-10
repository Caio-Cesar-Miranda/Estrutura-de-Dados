class PilhaAB {
    constructor(size = 5){
        this.dado = new Array(size);
        this.topoB = size-1;
        this.topoA = 0;
        this.size = size;
    }

    eVaziaA(){
        return this.topoA === 0;
    }
    eVaziaB(){
        return this.topoB === this.size-1;
    }
    empilhaA(elemento){
        if(this.isFull()) throw Error ("Pilha está cheia");
        this.dado[this.topoA] = elemento
        this.topoA++;
    }
    empilhaB(elemento){
        if(this.isFull()) throw Error ("Pilha está cheia");
        this.dado[this.topoB] = elemento
        this.topoB--;
    }
    desempilhaA(){
        if(this.eVaziaA()) throw Error ("Pilha A está vazia");
        this.topoA--;
        return this.dado[this.topoA];
    }
    desempilhaB(){
        if(this.eVaziaB()) throw Error ("A pilha está vaziaa");
        this.topoB++;
        return this.dado[this.topoB];
    }
    isFull(){
        return this.topoA > this.topoB;
    }
    
}

export default PilhaAB