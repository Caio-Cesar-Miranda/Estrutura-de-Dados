import removeDuplicados from "../src/Q7LISTA1"


test("Verificar os números duplicados", () => {
    expect(removeDuplicados([3,7,3,2,7,1,4,2])).toEqual([3, 7, 2, 1, 4]);
})