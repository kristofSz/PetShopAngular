export class Species {
  id: number;

  name: string;
  inStock: number;
  exotic: boolean;


  constructor(id: number, name: string, inStock: number, exotic: boolean) {
    this.id = id;
    this.name = name;
    this.inStock = inStock;
    this.exotic = exotic;
  }
}
