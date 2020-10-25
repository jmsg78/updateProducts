const { Product } = require('./coTest');


class ProductSuperSale extends Product {
  constructor(name,sellIn, price ) {
    super(name, sellIn, price);
  }
  updatePrice() {

      if ((this.price - (this.ratePerDay * this.factorDatePassed) ) > 0 ) { 
        this.price = this.price - (this.ratePerDay * this.factorDatePassed);
      } else {
        this.price = 0;
      }
       this.reduceOneDay();
    }
}
module.exports = {
  ProductSuperSale,
}
