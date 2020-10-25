class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
    this.factorDatePassed = 2;
    this.ratePerDay=1;
    this.maxPrice=50;
    this.legendaryPrice=80;
  }

  updatePrice() {
       if (this.price > 0) {
          this.price = this.price - this.ratePerDay;
       } 
       this.reduceOneDay();
  }

  reduceOneDay() {
       this.sellIn = this.sellIn - 1;
  }
}

module.exports = {
  Product,
}
