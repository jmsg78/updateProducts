const expect = require('chai').expect;
const should = require('chai').should()

const { Product } = require('../src/coTest');
const { CarInsurance } = require('../src/CarInsurance');
const { ProductFullCoverageSpecial } = require('../src/ProductFullCoverageSpecial');

describe("Create a New  Special Full Coverage Product", function() {

  it("should create a new Special Full Coverage Product #1 degrade one day (14) ", function() {
    const productList = new CarInsurance([ new ProductFullCoverageSpecial("Special Full Coverage", 15, 20) ]);
    const products = productList.updatePrice();
    expect(products[0].sellIn).equal(14);
  });

  it("should create a new Special Full Coverage Product #2 with price 50", function() {
    const productList = new CarInsurance([ new ProductFullCoverageSpecial("Special Full Coverage", 10, 49) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(50);
  });

  it("should create a new Special Full Coverage Product #3 with maxPrice", function() {
    const productList = new CarInsurance([ new ProductFullCoverageSpecial("Special Full Coverage", 5, 49) ]);
    const products = productList.updatePrice();
    expect(products[0].maxPrice).equal(50);
  });

  it("should create a new Special Full Coverage Product #4 when 6 days left", function() {
    const productList = new CarInsurance([ new ProductFullCoverageSpecial("Special Full Coverage", 6, 30) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(32);
  });


});
