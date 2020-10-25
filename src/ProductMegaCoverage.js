const { Product } = require('./coTest');

class ProductMegaCoverage extends Product {
  constructor(name,sellIn, price,legendaryPrice ) {
    super(name, sellIn, price, legendaryPrice);
  }
  updatePrice() {
            this.price = this.legendaryPrice;
            this.sellIn = this.sellIn;
    }

}
module.exports = {
  ProductMegaCoverage,
}
