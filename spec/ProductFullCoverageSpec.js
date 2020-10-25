const expect = require("chai").expect;
const should = require("chai").should();

const { Product } = require("../src/coTest");
const { ProductFullCoverage } = require("../src/ProductFullCoverage");

describe("Create a New Product Full Coverage", function () {
  it("should create a new Product FullCoverage", function () {
    const product = new ProductFullCoverage(new Product("Full Coverage", 2, 3));
    expect(product.name).equal("Full Coverage");
  });

  it("should create a new Full Coverage Product #2 when no more days left, price increases ", function () {
    const product = new ProductFullCoverage(new Product("Full Coverage", 2, 3));
    product.updatePrice();
    expect(product.price).equal(4);
  });

  it("should create a new Full Coverage Product #3 when no more days left, price increases ", function () {
    const product = new ProductFullCoverage(
      new Product("Full Coverage", -1, 5)
    );
    product.updatePrice();
    expect(product.price).equal(7);
    expect(product.sellIn).equal(-2);
  });

  it("should create a new Full Coverage Product #4 when no more days left, sellIn decrease ", function () {
    const product = new ProductFullCoverage(
      new Product("Full Coverage", 0, 10)
    );
    product.updatePrice();
    expect(product.price).equal(12);
    expect(product.sellIn).equal(-1);
  });

  it("should create a new Full Coverage Product #5 when price is maxPrice", function () {
    const product = new ProductFullCoverage(
      new Product("Full Coverage", 12, 50)
    );
    product.updatePrice();
    expect(product.price).equal(50);
    expect(product.sellIn).equal(11);
  });
});
