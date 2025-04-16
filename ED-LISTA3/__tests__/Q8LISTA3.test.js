import Pessoa from "../src/Q8CLASS";
import ListaPessoas from "../src/Q8LISTA3";

function listaParaArraySimples(lista) {
    const resultado = [];
    let atual = lista.head;
    while (atual !== null) {
        resultado.push({ nome: atual.dado.nome, idade: atual.dado.idade });
        atual = atual.proximo;
    }
    return resultado;
}

let lista;

beforeEach(() => {
    lista = new ListaPessoas();
    lista.adicionar(new Pessoa("Clara", 25));
    lista.adicionar(new Pessoa("Ana", 22));
    lista.adicionar(new Pessoa("Heloisa", 30));
});

test("deve ordenar por nome corretamente", () => {
    const ordenada = lista.ordenarPorNome();
    const resultado = listaParaArraySimples(ordenada);

    expect(resultado).toEqual([
        { nome: "Ana", idade: 22 },
        { nome: "Clara", idade: 25 },
        { nome: "Heloisa", idade: 30 }
    ]);
});

test("deve ordenar por idade corretamente", () => {
    const ordenada = lista.ordenarPorIdade();
    const resultado = listaParaArraySimples(ordenada);

    expect(resultado).toEqual([
        { nome: "Ana", idade: 22 },
        { nome: "Clara", idade: 25 },
        { nome: "Heloisa", idade: 30 }
    ]);
});

test("deve manter a lista original intacta após ordenações", () => {
    const original = listaParaArraySimples(lista);
    lista.ordenarPorNome();
    lista.ordenarPorIdade();
    const aposOrdenacoes = listaParaArraySimples(lista);

    expect(aposOrdenacoes).toEqual(original);
});
