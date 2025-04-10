import Pilha from "./Pilha.js";


function verificaSequencia(expressao){
    let pilhaQ5 = new Pilha();

    for(let i = 0; i < expressao.length; i++){
        let char = expressao[i];

        if(char === "[" || char === "("){
            pilhaQ5.push(char);
        }else if(char === "]" || char === ")"){
            if(pilhaQ5.isEmpty()){
                return false;
            }
            
            let topo = pilhaQ5.pop();
            if((char === "]" && topo !== "[") || (char === "(" && topo !== ")")){
                return false;
            }
        }
    }
    return pilhaQ5.isEmpty();
}

export default verificaSequencia;