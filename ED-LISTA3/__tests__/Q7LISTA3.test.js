import Josephus from "../src/Q7LISTA3";

test("Josephus com N=7, D=3", () => {
    const jogo = new Josephus(7, 3);
    const { eliminados, sobrevivente } = jogo.executar();
    expect(eliminados).toEqual([3, 6, 2, 7, 5, 1]);
    expect(sobrevivente).toBe(4);
});

test("Josephus com N=5, D=2", () => {
    const jogo = new Josephus(5, 2);
    const { eliminados, sobrevivente } = jogo.executar();
    expect(eliminados).toEqual([2, 4, 1, 5]);
    expect(sobrevivente).toBe(3);
});
