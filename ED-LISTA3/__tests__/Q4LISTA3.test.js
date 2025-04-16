import ListaSimples from "../src/Q4LISTA3";

let h;

beforeEach(() => {
    h = new ListaSimples();
});

test("inverter lista vazia mantém vazia", () => {
    h.inverter();
    expect(h.toString()).toBe("");
});

test("inverter lista com um elemento mantém igual", () => {
    h.addFim("X");
    h.inverter();
    expect(h.toString()).toBe("X");
});

test("inverter lista com múltiplos elementos", () => {
    h.addFim("A");
    h.addFim("B");
    h.addFim("C");
    h.inverter();
    expect(h.toString()).toBe("C B A");
});

test("inverter duas vezes volta ao original", () => {
    h.addFim("1");
    h.addFim("2");
    h.addFim("3");
    h.inverter();
    h.inverter();
    expect(h.toString()).toBe("1 2 3");
});

