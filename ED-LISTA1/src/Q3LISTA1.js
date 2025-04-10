class PilhaQ3 {
    constructor(size){
        this.dado = new Array(size);
        this.topo = 0;
        this.size = size;
    }

    push(elemento){
        if(this.topo === this.size) throw Error ("Stack Overflow");
        this.dado[this.topo] = elemento;
        this.topo++;
    }

    pop(){
        if(this.topo === 0) throw Error ("Stack underflow");
        this.topo--;
        return this.dado[this.topo];
    }

    isEmpty(){
        return this.topo === 0;
    }

    trocarTopoBase(){
        if (this.topo <= 1) return;

        let pilhaAux = new PilhaQ3(this.size);
        let topoOG = this.pop();

        while(this.topo > 1){
            pilhaAux.push(this.pop());
        }

        let baseOG = this.pop();
        this.push(topoOG);

        while(!pilhaAux.isEmpty()){
            this.push(pilhaAux.pop());
        }

        this.push(baseOG);
    }
}

export default PilhaQ3;