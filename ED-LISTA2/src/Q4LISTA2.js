import Fila from "./Fila";

function intercalaFilas(f1, f2){
    const total = f1.length() + f2.length();
    const result = new Fila(total);

    let i = f1.inicio;
    let j = f2.inicio;

    const tam1 = f1.length();
    const tam2 = f2.length();

    let cont = 0, cont2 = 0;

    while(cont < tam1 || cont2 < tam2){
        if(cont < tam1){
            result.enqueue(f1.dado[i]);
            i = (i + 1) % (f1.size + 1);
            cont++;
        }
        if(cont2 < tam2){
            result.enqueue(f2.dado[j]);
            j = (j + 1) % (f2.size + 1);
            cont2++;
        }
    }
    return result;
}

export default intercalaFilas;