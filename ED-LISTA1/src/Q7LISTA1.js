import Pilha from "./Pilha";

function removeDuplicados(expressao) {
    let pilhaResultado = new Pilha(expressao.length);
    
    let encontrados = {};
    
    for (let i = 0; i < expressao.length; i++) {
        let elemento = expressao[i];
        if (!encontrados[elemento]) {
            encontrados[elemento] = true;
            pilhaResultado.push(elemento);
        }
    }
    
    let resultado = [];
    while (!pilhaResultado.isEmpty()) {
        resultado.unshift(pilhaResultado.pop());
    }
    
    return resultado;
}

export default removeDuplicados;
