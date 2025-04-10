import Fila from "./Fila";

function inverterFila(fila) {
    if (fila.isEmpty()) return;

    const elemento = fila.dado[fila.inicio];
    fila.dequeue();

    inverterFila(fila);

    fila.enqueue(elemento);
}

export default inverterFila;
