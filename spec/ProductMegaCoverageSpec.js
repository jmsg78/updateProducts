const expect = require('chai').expect;

const { Product } = require('../src/coTest');
const { CarInsurance } = require('../src/CarInsurance');
const { ProductMegaCoverage } = require('../src/ProductMegaCoverage');

describe("Create a New  Mega Coverage Product", function() {

  it("should create a new Mega Coverage Product #1 without degrade one day (0) ", function() {
    const productList = new CarInsurance([ new ProductMegaCoverage("Mega Coverage", 0, 80) ]);
    const products = productList.updatePrice();
    expect(products[0].sellIn).equal(0);
  });

  it("should create a new Mega Coverage Product #2 with price 80", function() {
    const productList = new CarInsurance([ new ProductMegaCoverage("Mega Coverage", -1, 80) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(80);
  });

});

