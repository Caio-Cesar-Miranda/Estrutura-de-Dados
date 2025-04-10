import PilhaComFilas from "../src/Q1LISTA2";


let b;

beforeEach(() => {
    b = new PilhaComFilas;
})


test("Testando se a pilha 1 e 2 está vazia e colocando elemento", () => {
    expect(b.isEmpty()).toBe(true);
    b.push(25);
    expect(b.top()).toBe(25);
})