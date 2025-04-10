import PilhaAB from "../src/Q2LISTA1";



let a;

beforeEach(() => {
    a = new PilhaAB();
});

test("Se a pilha está vazia é vazia", () => {
    expect(a.eVaziaA()).toBe(true);
    expect(a.eVaziaB()).toBe(true);
})

test("Se a pilha está está cheia", () => {
    a.empilhaA("1");
    a.empilhaA("2");
    a.empilhaA("3");
    a.empilhaB("A");
    a.empilhaB("A");
    expect(a.isFull()).toBe(true);
})