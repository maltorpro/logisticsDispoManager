export class DisposalService {
  disposals = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];

  get() {
    return this.disposals;
  }
  add(value: Object) {
    this.disposals.push(value);
  }
}