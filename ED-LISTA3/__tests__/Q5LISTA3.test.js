import ListaSimples from "../src/Q5LISTA3";

function listaParaArray(lista) {
    const resultado = [];
    let atual = lista.head;
    while (atual !== null) {
        resultado.push(atual.dado);
        atual = atual.proximo;
    }
    return resultado;
}

let h;

beforeEach(() => {
    h = new ListaSimples();
    h.addFim("A");
    h.addFim("B");
    h.addFim("C");
    h.addFim("D");
});

test("deve manter os mesmos elementos após o shuffle", () => {
    const antes = listaParaArray(h).sort();
    h.shuffleManual();
    const depois = listaParaArray(h).sort();
    expect(depois).toEqual(antes);
});


test("não deve quebrar lista com 1 ou 0 elementos", () => {
    const listaVazia = new ListaSimples();
    listaVazia.shuffleManual();
    expect(listaVazia.toString()).toBe("");

    const listaUm = new ListaSimples();
    listaUm.addFim("Z");
    listaUm.shuffleManual();
    expect(listaUm.toString()).toBe("Z");
});

