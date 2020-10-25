const { Product } = require('./coTest');

class ProductFullCoverage extends Product {
  constructor(name,sellIn, price ) {
    super(name, sellIn, price);
  }

  updatePrice() {
        if ( this.price < this.maxPrice ) {
          if (this.sellIn <= 0) {
            this.price = this.price + (this.ratePerDay * this.factorDatePassed);
            
          } else {
            this.price = this.price + this.ratePerDay;
          }
        }
          this.reduceOneDay()
    }

}

module.exports = {
  ProductFullCoverage,
}
