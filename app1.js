class Fruit {
  constructor(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
  }
  getDetails() {
    return `${this.name} has a price of ${this.price}
    and has a color of ${this.color}`;
  }
  getPrice() {
    return `${this.name} has the price ${this.price}`;
  }
  changePrice(newPrice) {
    this.price = newPrice;
    this.pricechanged = true;
  }
  static returnbaseprice() {
    return '$0.99cents per pound = $2.18cents per kilogram';
  }
}

const fruit1 = new Fruit('Apple', '$0.99cents per pound', 'red');
// console.log(fruit1);
// fruit1.changePrice('$1.29cents per pound');
// console.log(fruit1);

console.log(Fruit.returnbaseprice());
