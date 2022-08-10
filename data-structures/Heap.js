class Heap {
  /**
   * 
   * @param {*Boolean} max 
   */
  constructor(max = true) {
    this.array = [];
    this.tam = 0;
    if(max) {
      this.comp = (a, b) => (a - b) < 0 ? 0 : 1; 
    }else {
      this.comp = (a,b) => (a - b) < 0 ? 1 : 0;
    }
  }
  
  get size() {
    return this.tam;
  }
  
  delete() {
    this.tam--;
    this.array.shift();
    this.array.unshift(this.array.pop());
    this.max_heapify(0, true);
  }
  
  insert(v){
    this.array.push(v);
    this.tam++;
    let i = this.parent(this.tam);
    if(i >= 0) this.max_heapify(i, false);
  }
  
  max_heapify(pos, down) {
    let izq, der, p;
    do{
      p = pos;
      izq = this.left(pos);
      der = this.right(pos);
      if(izq < this.tam && this.comp(this.array[izq],this.array[p])) {
        p = izq;
      }
      if(der < this.tam && this.comp(this.array[der],this.array[p])) {
        p = der;
      }
      if(p !== pos) {
        let aux = this.array[pos];
        this.array[pos] = this.array[p];
        this.array[p] = aux;
        if(!down) pos = this.parent(pos+1);
        else pos = p;
        p = -1;
      }
    }while(p !== pos);
  }
  
  left(pos) {
    return 2*(pos+1) -1;
  }
  
  right(pos) {
    return 2*(pos+1);
  }
  
  parent(pos) {
    return Math.floor(pos/2) - 1;
  }
}