import PilhaQ3 from "../src/Q3LISTA1";


let b;

beforeEach (() => {
    b = new PilhaQ3(5);
})

test("Testando a troca de base pelo topo", () => {
    b.push(1);
    b.push(2);
    b.push(3);
    b.push(4);
    b.push(5);
    b.trocarTopoBase();
    expect(b.pop()).toBe(1);
    expect(b.pop()).toBe(4);
    expect(b.pop()).toBe(3);
    expect(b.pop()).toBe(2);
    expect(b.pop()).toBe(5);
})