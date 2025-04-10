import invertePilha from "../src/Q1LISTA1";

let a;

beforeEach (() => {
    a = new invertePilha();
});


test("Inverter a palavra", () => {
    const result = a.inverterStr("caio");
    expect(result).toBe("oiac");
})