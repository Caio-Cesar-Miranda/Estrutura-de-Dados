import Fila from "../src/Q2LISTA3";

let h;

beforeEach(() => {
    h = new Fila();
});

test("inicia vazia", () => {
    expect(h.isEmpty()).toBe(true);
    expect(h.size()).toBe(0);
});

test("enqueue insere elementos corretamente", () => {
    h.enqueue("A");
    h.enqueue("B");
    h.enqueue("C");
    expect(h.toString()).toBe("A B C");
});


test("dequeue remove e retorna o primeiro elemento", () => {
    h.enqueue(1);
    h.enqueue(2);
    h.enqueue(3);
    expect(h.dequeue()).toBe(1);
    expect(h.toString()).toBe("2 3");
    expect(h.size()).toBe(2);
});


