const { Product } = require('./coTest');

class ProductFullCoverageSpecial extends Product {
  constructor(name,sellIn, price ) {
    super(name, sellIn, price);
  }

  updatePrice() {
        if (this.sellIn > 10) {
        if ( this.price < this.maxPrice ) {
            this.price = this.price + this.ratePerDay;
          }
        } else if (( this.sellIn > 5) && (this.sellIn < 11)) {
          if ( (this.price + (this.ratePerDay * 2)) < this.maxPrice ) {
              this.price = this.price + (this.ratePerDay * 2);
            } else {
              this.price = this.maxPrice;
            }
        } else {
          if ( (this.price + (this.ratePerDay * 3)) < this.maxPrice ) {
              this.price = this.price + (this.ratePerDay * 3);
            } else {
              this.price = this.maxPrice;
            }
        }
          this.validateNoMoreDays()
          this.reduceOneDay()
    }

    validateNoMoreDays() {
      if (this.sellIn <= 0) {
        this.price = 0;
      }
    }

}
module.exports = {
  ProductFullCoverageSpecial,
}
