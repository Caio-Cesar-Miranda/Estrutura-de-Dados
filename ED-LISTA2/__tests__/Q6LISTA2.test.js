import Fila from "../src/Fila";
import inverterFila from "../src/Q6LISTA2";

let f;

beforeEach(() => {
    f = new Fila(5);
});

test("Inverter fila recursivamente", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    
    inverterFila(f);

    const resultado = [];
    while (!f.isEmpty()) {
        resultado.push(f.dado[f.inicio]);
        f.dequeue();
    }

    expect(resultado).toEqual(["C", "B", "A"]);
});

