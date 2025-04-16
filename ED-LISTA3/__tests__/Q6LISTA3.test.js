import ListaString from "../src/Q6LISTA3";

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
    h = new ListaString();
    h.fromString("ClaraHeloisa");
});

test("substring(0, 4) deve retornar ['C', 'l', 'a', 'r', 'a']", () => {
    const sub = h.substring(0, 4);
    expect(listaParaArray(sub)).toEqual(['C', 'l', 'a', 'r', 'a']);
});

test("substring(5, 8) deve retornar ['H', 'e', 'l', 'o']", () => {
    const sub = h.substring(5, 8);
    expect(listaParaArray(sub)).toEqual(['H', 'e', 'l', 'o']);
});

test("substring(0, 11) deve retornar todos os caracteres", () => {
    const sub = h.substring(0, 11);
    expect(listaParaArray(sub)).toEqual(['C', 'l', 'a', 'r', 'a', 'H', 'e', 'l', 'o', 'i', 's', 'a']);
});


test("substring de lista vazia deve retornar lista vazia", () => {
    const vazia = new ListaString();
    const sub = vazia.substring(0, 3);
    expect(listaParaArray(sub)).toEqual([]);
});
