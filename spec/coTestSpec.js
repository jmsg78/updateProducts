const expect = require("chai").expect;

const { Product } = require("../src/coTest");
const { ProductDefault } = require("../src/ProductDefault");
const { CarInsurance } = require("../src/CarInsurance");


describe("Create a New Product", function () {
  it("should create a new Product #1 called Medium Product", function () {
    const product = new ProductDefault(new Product("Medium Product", 2, 3));
    product.updatePrice();
    expect(product.name).equal("Medium Product");
  });

  it("should create a new Product #2 when price is maxPrice", function () {
    const product = new ProductDefault(new Product("Medium Product", 12, 50));
    product.updatePrice();
    expect(product.price).equal(49);
  });

  it("should create a new Product #3 when no more days left", function () {
    const product = new ProductDefault(new Product("Medium Product", 0, 50));
    product.updatePrice();
    expect(product.price).equal(49);
    expect(product.sellIn).equal(-1);
  });

  it("should create a new Product #4 when no more days left and price is 0", function () {
    const product = new ProductDefault(new Product("Medium Product", 0, 0));
    product.updatePrice();
    expect(product.price).equal(0);
    expect(product.sellIn).equal(-1);
  });
});
