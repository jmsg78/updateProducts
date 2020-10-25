const { ProductDefault } = require("./ProductDefault");
class ProductMegaCoverage extends ProductDefault {
  updatePrice() {
    this.price = this.legendaryPrice;
    this.sellIn = this.sellIn;
  }
}
module.exports = {
  ProductMegaCoverage,
};
