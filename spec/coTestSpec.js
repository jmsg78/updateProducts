const expect = require('chai').expect;

const { Product } = require('../src/coTest');
const { CarInsurance } = require('../src/CarInsurance');

describe("Create a New Product", function() {

  it("should create a new Product #1 called Medium Product", function() {
    const coTest = new CarInsurance([ new Product("Medium Product", 2, 3) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Medium Product");
  });

    it("should create a new Product #2 when price is maxPrice", function() {
    const productList = new CarInsurance([ new Product("Special Full Coverage",12, 50) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(49);
  });

it("should create a new Product #3 when no more days left", function() {
    const productList = new CarInsurance([ new Product("Special Full Coverage",0, 50) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(49);
  });

  it("should create a new Product #4 when no more days left and price is 0", function() {
    const productList = new CarInsurance([ new Product("Special Full Coverage",0, 0) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(0);
  });

});

