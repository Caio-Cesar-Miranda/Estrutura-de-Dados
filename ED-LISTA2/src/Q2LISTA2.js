class FilaComPilhas{
    constructor(){
        this.stackEntrada = [];
        this.stackSaida = [];
    }

    enqueue(elemento){
        this.stackEntrada.push(elemento);
    }

    dequeue(){
        if(this.isEmpty()) throw new Error ("Fila vazia!");

        if(this.stackSaida === 0){
            while(this.stackEntrada.length > 0){
                this.stackSaida.push(this.stackEntrada.pop());
            }
        }
        return this.stackSaida.pop();
    }

    front(){
        if(this.isEmpty()) throw new Error ("Fila vaziaaa");

        if(this.stackSaida.length === 0){
            while(this.stackEntrada.length > 0){
                this.stackSaida.push(this.stackEntrada.pop());
            }
        }
        return this.stackSaida[this.stackSaida.length - 1];
    }

    isEmpty(){
        return this.stackEntrada.length === 0 && this.stackSaida.length === 0;
    }

    clear(){
        this.stackEntrada = [];
        this.stackSaida = [];
    }
}

export default FilaComPilhas;