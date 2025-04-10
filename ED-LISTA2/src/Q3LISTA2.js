import Fila from "./Fila";

class GerenciadordeFila{
    constructor(){
        this.fila = new Fila();
        this.carregados = 0;
    }

    chegada(caminhoneiro){
        if(this.carregados >= this.limite) throw new Error ("Limite diário atingido");
        this.fila.enqueue(caminhoneiro);
    }

    carregarProximo(){
        if(this.fila.isEmpty()) throw new Error ("Nenhum caminhoneiro aguardando");

        const caminhoneiro = this.fila.front();
        this.fila.dequeue();
        this.carregados++;
        return caminhoneiro;
    }

    existirAguardando(){
        return !this.fila.isEmpty();
    }

    limiteAtingido(){
        return this.carregados >= 10;
    }

    listarFila(){
        const lista = [];
        let pos = this.fila.inicio;

        for(let i = 0; i< this.fila.length(); i++){
            lista.push(this.fila.dado[pos]);
            pos = (pos + 1) % (this.fila.size+1);
        }
        return lista;
    }

    resetDia(){
        this.fila.clear();
        this.carregados = 0;
    }
}

export default GerenciadordeFila;