import Fila from "../src/Fila";
import intercalaFilas from "../src/Q4LISTA2";

function listarFila(fila){
    const lista = [];

    let pos = fila.inicio;

    for(let i = 0; i < fila.length(); i++){
        lista.push(fila.dado[pos]);
        pos = (pos + 1) % (fila.size + 1);
    }
    return lista;
}

test("Intercalar as filas", () => {

    const h = new Fila();
    const c = new Fila();

    h.enqueue("A");
    h.enqueue("B");
    h.enqueue("C");

    c.enqueue(1);
    c.enqueue(2);
    c.enqueue(3);

    const result = intercalaFilas(h, c);

    expect(listarFila(result)).toEqual(["A", 1, "B", 2, "C", 3]);
})