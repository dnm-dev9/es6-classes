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
}

// Apple Subclass
class Apple extends Fruit{
  constructor(name, price, color, fruitname){
    super(name, price, color);
    this.fruitname = fruitname;
  }
}

const apple1 = new Apple('Pomme Gala', '$1.59/lb','red-coral-yellow','apple');
console.log(apple1);
