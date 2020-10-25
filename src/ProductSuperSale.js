const { ProductDefault } = require("./ProductDefault");

class ProductSuperSale extends ProductDefault {
  updatePrice() {
    if (this.price - this.ratePerDay * this.factorDatePassed > 0) {
      this.price = this.price - this.ratePerDay * this.factorDatePassed;
    } else {
      this.price = 0;
    }
    this.reduceOneDay();
  }
}
module.exports = {
  ProductSuperSale,
};
