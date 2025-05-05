class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getPai(i) {
      return Math.floor((i - 1) / 2);
    }
  
    getEsq(i) {
      return 2 * i + 1;
    }
  
    getDir(i) {
      return 2 * i + 2;
    }
  
    trocar(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    subir(i) {
      while (i > 0 && this.heap[this.getPai(i)] > this.heap[i]) {
        this.trocar(i, this.getPai(i));
        i = this.getPai(i);
      }
    }
  
    descer(i) {
      let menor = i;
      const esq = this.getEsq(i);
      const dir = this.getDir(i);
  
      if (esq < this.heap.length && this.heap[esq] < this.heap[menor]) {
        menor = esq;
      }
  
      if (dir < this.heap.length && this.heap[dir] < this.heap[menor]) {
        menor = dir;
      }
  
      if (menor !== i) {
        this.trocar(i, menor);
        this.descer(menor);
      }
    }
  
    inserir(valor) {
      this.heap.push(valor);
      this.subir(this.heap.length - 1);
    }
  
    removerMin() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const raiz = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.descer(0);
  
      return raiz;
    }
  
    exibir() {
      console.log(this.heap);
    }
  }
  
export default MinHeap;