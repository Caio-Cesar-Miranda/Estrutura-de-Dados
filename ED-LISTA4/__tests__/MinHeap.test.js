import MinHeap from "../src/MinHeap";

let h;

beforeEach(() => {
    h = new MinHeap();
})

test ('Inserindo elementos e trocar a ordem', () => {
    h.inserir(4);
    h.inserir(20);
    h.inserir(5);
    h.inserir(3);
    h.inserir(1);

    console.log("Heap atual: ");
    h.exibir();
})
