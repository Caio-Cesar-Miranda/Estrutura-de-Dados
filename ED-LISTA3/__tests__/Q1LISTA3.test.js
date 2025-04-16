import Pilha from "../src/Q1LISTA3";


let h;

beforeEach(() => {
    h = new Pilha();
})

test("Pilha inicia vazia", () => {
    expect(h.isEmpty()).toBe(true);
    expect(h.size()).toBe(0);
})

test("push insere os elementos corretamente", () => {
    h.push(10);
    h.push(20);
    h.push(30);
    expect(h.toString()).toBe("30 20 10");
});