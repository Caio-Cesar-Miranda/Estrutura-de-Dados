import Pilha from "./Pilha";

const pilhadePratos  = [];
const capacidade = 3;

function empilha(valor){
    if(pilhadePratos.length === 0 || pilhadePratos[pilhadePratos.length - 1].isFull()){
        let novaPilha = new Pilha(capacidade);
        pilhadePratos.push(novaPilha);
    }
    pilhadePratos[pilhadePratos.length - 1].push(valor);
}

function desempilha(){
    while(pilhadePratos.length > 0){
        let ultimaPilha = pilhadePratos[pilhadePratos.length - 1];
        if(!ultimaPilha.isEmpty()){
            return ultimaPilha.pop();
        } else {
            pilhadePratos.pop();
        }
    }
    return null;
}

export {empilha, desempilha};