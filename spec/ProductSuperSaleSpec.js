const expect = require("chai").expect;

const { Product } = require("../src/coTest");
const { ProductSuperSale } = require("../src/ProductSuperSale");

describe("Create a New  Super Sale Product", function () {
  it("should create a new Super Sale Product #1 degrade one day ", function () {
        const product = new ProductSuperSale(
      new Product("Super Sale", 3, 6)
    );
    product.updatePrice();
    expect(product.price).equal(4);
    expect(product.sellIn).equal(2);
  });

  it("should create a new Super Sale Product #2 degrade in price twice as fast as normal Products.", function () {
    const product = new ProductSuperSale(
      new Product("Super Sale", 1, 2)
    );
    product.updatePrice();
    expect(product.price).equal(0);
    expect(product.sellIn).equal(0);

  });

  it("should create a new Super Sale Product #3 when price < 0.", function () {

 const product = new ProductSuperSale(
      new Product("Super Sale", 1, 0)
    );
    product.updatePrice();
    expect(product.price).equal(0);
    expect(product.sellIn).equal(0);

  });
});
