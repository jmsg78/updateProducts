const { Product } = require("./coTest.js");
const { ProductDefault } = require("./ProductDefault");
const { ProductFullCoverage } = require("./ProductFullCoverage");

const { ProductFullCoverageSpecial } = require("./ProductFullCoverageSpecial");
const { ProductMegaCoverage } = require("./ProductMegaCoverage");
const { ProductSuperSale } = require("./ProductSuperSale");
const { CarInsurance } = require("./CarInsurance");

class ProductFactory {
  static createProductType(product) {
    switch (product.name.toLowerCase()) {
      case "full coverage":
        return new ProductFullCoverage(product);
      case "mega coverage":
        return new ProductMegaCoverage(product);
      case "special full coverage":
        return new ProductFullCoverageSpecial(product);
      case "super sale":
        return new ProductSuperSale(product);
      default:
        return new ProductDefault(product);
    }
  }
}

module.exports = { 
  ProductFactory, 
  }
