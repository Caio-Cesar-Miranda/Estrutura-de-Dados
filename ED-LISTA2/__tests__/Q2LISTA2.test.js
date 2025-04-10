import FilaComPilhas from "../src/Q2LISTA2";

let h;

beforeEach (() => {
    h = new FilaComPilhas;
})



test("Colocando um elemento na fila", () => {
    h.enqueue(165)
    expect(h.front()).toBe(165);
})