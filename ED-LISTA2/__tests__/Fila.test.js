import Fila from "../src/Fila";

let f;

beforeEach (() => {
    f = new Fila;
})


test("Uma fila recém inicializada está vazia, não está cheia e o tamanho é zero", () => {
    expect(f.isEmpty()).toBe(true);
    expect(f.isFull()).toBe(false);
    expect(f.length()).toBe(0);
})