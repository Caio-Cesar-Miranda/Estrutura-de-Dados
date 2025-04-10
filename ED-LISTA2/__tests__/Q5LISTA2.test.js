import Deque from "../src/Q5LISTA2";

let deque;

beforeEach(() => {
    deque = new Deque(5);
});

test("Inserir e remover do início", () => {
    deque.inserirInicio("A");
    deque.inserirInicio("B");
    expect(deque.removerInicio()).toBe("B");
    expect(deque.removerInicio()).toBe("A");
});

test("Inserir e remover do fim", () => {
    deque.inserirFim("X");
    deque.inserirFim("Y");
    expect(deque.removerFim()).toBe("Y");
    expect(deque.removerFim()).toBe("X");
});

test("Inserir em ambos os lados e listar", () => {
    deque.inserirInicio("A");
    deque.inserirFim("B");
    deque.inserirInicio("C");
    expect(deque.listar()).toEqual(["C", "A", "B"]);
});

test("Remover de deque vazio deve lançar erro", () => {
    expect(() => deque.removerInicio()).toThrow("Deque vazio!");
    expect(() => deque.removerFim()).toThrow("Deque vazio!");
});

test("Inserir além do limite deve lançar erro", () => {
    deque.inserirFim("1");
    deque.inserirFim("2");
    deque.inserirFim("3");
    deque.inserirFim("4");
    deque.inserirFim("5");
    expect(() => deque.inserirFim("6")).toThrow("Deque cheio!");
});
