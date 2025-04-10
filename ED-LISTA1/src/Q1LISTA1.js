class invertePilha {
    constructor(size = 10){
        this.topo = 0;
        this.dado = new Array(size)
        this.size = size;
    }

    push(elemento){
        if(this.isFull()) throw new Error ("Stack Overflow");
        this.dado[this.topo] = elemento;
        this.topo++;
    }
    pop(){
        if(this.isEmpty()) throw new Error ("Stack underflow");
        this.topo--;
        return this.dado[this.topo];
    }

    isFull(){
        return this.topo === this.size;
    }

    isEmpty(){
        return this.topo === 0;
    }

    length(){
        return this.topo;
    }

    inverterStr(str){
        let inverte = "";
        for(let i = 0; i < str.length; i++){
            this.push(str[i]);
        }

        for(let i = 0; i < str.length; i++){
            inverte += this.pop();
        }
        return inverte;
    }
}

export default invertePilha;