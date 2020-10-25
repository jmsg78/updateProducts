const { ProductDefault } = require('./ProductDefault');

class ProductFullCoverage extends ProductDefault {

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
