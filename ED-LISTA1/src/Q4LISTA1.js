class PilhaQ4 {
    constructor(size = 32){
        this.dados = new Array(size);
        this.topo = 0;
        this.size = size;
    }

    push(elemento){
        if(this.topo >= this.size) throw new Error ("Stack overflow");
        this.dados[this.topo] = elemento
        this.topo++;
        
    }

    pop(){
        if(this.topo === 0) throw new Error ("Stack underflow");
        this.topo--;
        return this.dados[this.topo];
    }

    isEmpty(){
        return this.topo === 0;
    }

    decimalBinario(numero){
        let pilha = new PilhaQ4();
        let result = ""

        while(numero > 0){
            let resto = numero % 2;
            pilha.push(resto);
            
            numero = (numero - resto) / 2;
        }

        while(!pilha.isEmpty()){
            result += pilha.pop();
        }

        return result;
    }
}


export default PilhaQ4;