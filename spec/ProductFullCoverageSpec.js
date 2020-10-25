const expect = require('chai').expect;
const should = require('chai').should();

const { Product } = require('../src/coTest');
const { CarInsurance } = require('../src/CarInsurance');
const { ProductFullCoverage } = require('../src/ProductFullCoverage');

describe("Create a New Product Full Coverage", function() {

  it("should create a new Product FullCoverage", function() {
    const productList = new CarInsurance([ new ProductFullCoverage("Full Coverage", 2, 3) ]);
    const products = productList.updatePrice();
    expect(products[0].name).equal("Full Coverage");
  });

  it("should create a new Full Coverage Product #2 when no more days left, price increases the older it gets ", function() {
    const productList = new CarInsurance([ new ProductFullCoverage("Full Coverage", 0, 15) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(17);
  });

});

