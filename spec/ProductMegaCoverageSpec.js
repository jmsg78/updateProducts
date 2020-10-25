const expect = require("chai").expect;

const { Product } = require("../src/coTest");
const { ProductMegaCoverage } = require("../src/ProductMegaCoverage");

describe("Create a New  Mega Coverage Product", function () {
  it("should create a new Mega Coverage Product #1 without degrade one day (0) ", function () {
    const product = new ProductMegaCoverage(
      new Product("Mega Coverage", 0, 80)
    );
    product.updatePrice();
    expect(product.price).equal(80);
    expect(product.sellIn).equal(0);
  });

  it("should create a new Mega Coverage Product #2 with price 80 and no more days", function () {
    const product = new ProductMegaCoverage(
      new Product("Mega Coverage", -1, 80)
    );
    product.updatePrice();
    expect(product.price).equal(80);
    expect(product.sellIn).equal(-1);
  });
});

