import GerenciadordeFila from "../src/Q3LISTA2";


let h;

beforeEach (() => {
    h = new GerenciadordeFila
})


test("A fila de caminhoneiros não deve haver ninguém esperando ", () => {
    expect(h.existirAguardando()).toBe(false);
})

test("A fila de caminhoneiros deverá estar cheia", () => {
    expect(h.limiteAtingido(10)).toBe(false);
})

