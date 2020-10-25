const expect = require("chai").expect;
const should = require("chai").should();

const { Product } = require("../src/coTest");
const {
  ProductFullCoverageSpecial,
} = require("../src/ProductFullCoverageSpecial");

describe("Create a New  Special Full Coverage Product", function () {
  it("should create a new Special Full Coverage Product #1 degrade one day (14) and price 21 ", function () {
    const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 15, 20)
    );
    product.updatePrice();
    expect(product.price).equal(21);
    expect(product.sellIn).equal(14);
  });

  it("should create a new Special Full Coverage Product #2 with price 50", function () {
    const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", -1, 50)
    );
    product.updatePrice();
    expect(product.price).equal(0);
    expect(product.sellIn).equal(-2);
  });

  it("should create a new Special Full Coverage Product #3 when 6 days left", function () {
      const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 6, 30)
    );
    product.updatePrice();
    expect(product.price).equal(32);
    expect(product.sellIn).equal(5);
  });

  it("should create a new Special Full Coverage Product #4 when 4 days left", function () {
       const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 4, 30)
    );
    product.updatePrice();
    expect(product.price).equal(33);
    expect(product.sellIn).equal(3);
  });

  it("should create a new Special Full Coverage Product #5 when no more days left", function () {
       const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 0, 10)
    );
    product.updatePrice();
    expect(product.price).equal(0);
    expect(product.sellIn).equal(-1);
  });

  it("should create a new Special Full Coverage Product #6 when one day left and price maxPrice", function () {
      const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 1, 51)
    );
    product.updatePrice();
    expect(product.price).equal(50);
    expect(product.sellIn).equal(0);
  });

    it("should create a new Special Full Coverage Product #7 when 7 days left  and maxPrice ", function () {
      const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 7, 51)
    );
    product.updatePrice();
    expect(product.price).equal(50);
    expect(product.sellIn).equal(6);
  });


      it("should create a new Special Full Coverage Product #7 when 7 days left  and maxPrice ", function () {
      const product = new ProductFullCoverageSpecial(
      new Product("Special Full Coverage", 30, 50)
    );
    product.updatePrice();
    expect(product.price).equal(50);
    expect(product.sellIn).equal(29);
  });

});
