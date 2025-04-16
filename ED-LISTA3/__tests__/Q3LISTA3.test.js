import ListaSimples from "../src/Q3LISTA3";


    let h;

beforeEach(() => {
    h = new ListaSimples();
});

test("h inicia vazia", () => {
    expect(h.isEmpty()).toBe(true);
    expect(h.size()).toBe(0);
});

test("addFim insere no final da lista", () => {
    h.addFim("A");
    h.addFim("B");
    h.addFim("C");
    expect(h.toString()).toBe("A B C");
    expect(h.size()).toBe(3);
});

test("addInicio insere no início da lista", () => {
    h.addInicio("X");
    h.addInicio("Y");
    expect(h.toString()).toBe("Y X");
});

test("addEm insere na posição correta", () => {
    h.addFim("A");
    h.addFim("B");
    h.addFim("D");
    h.addEm("C", 2);
    expect(h.toString()).toBe("A B C D");
});


test("removeEm remove item da posição específica", () => {
    h.addFim("A");
    h.addFim("B");
    h.addFim("C");
    const removido = h.removeEm(1);
    expect(removido.dado).toBe("B");
    expect(h.toString()).toBe("A C");
});


test("buscar retorna null se não encontrar", () => {
    h.addFim("Z");
    expect(h.buscar("X")).toBe(null);
});

test("removeEm posição inválida lança erro", () => {
    expect(() => h.removeEm(0)).toThrow("Posição inválida.");
});

test("addEm em posição inválida lança erro", () => {
    expect(() => h.addEm("X", 5)).toThrow("Posição inválida.");
});

