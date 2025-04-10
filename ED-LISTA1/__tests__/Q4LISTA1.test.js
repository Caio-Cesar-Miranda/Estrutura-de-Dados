import PilhaQ4 from "../src/Q4LISTA1";


let h;

beforeEach(() => {
    h = new PilhaQ4();
});

test("Se transforma um numero decimal para binario", () => {
    expect(h.isEmpty()).toBe(true);
    expect(h.decimalBinario(10)).toBe("1010");
})