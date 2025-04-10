import verificaSequencia from "../src/Q5LISTA1";


test("Se a entrada é bem formada", () => {
    expect(verificaSequencia('[()[()]]()')).toBe(true);
});


test("Se a entrada é mal formada", () => {
    expect(verificaSequencia("(()]")).toBe(false);
});