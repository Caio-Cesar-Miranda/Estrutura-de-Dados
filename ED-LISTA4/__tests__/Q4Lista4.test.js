import verificarVencedores from "../src/Q4Lista4";

let h;


beforeEach(() => {
    h = new verificarVencedores();
})

test('deve retornar apostador com SENA', () => {
    const sorteados =[5, 12, 24, 69, 71, 11];
    const apostas = [[5, 12, 24, 69, 71, 11]];

    const resultado = verificarVencedores(sorteados, apostas);
    expect(resultado).toEqual([{tipo: 'sena', apostador: 1}]);
})