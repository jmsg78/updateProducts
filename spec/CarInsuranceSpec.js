const expect = require('chai').expect;
const should = require('chai').should();

const { Product } = require('../src/coTest');
const { CarInsurance } = require('../src/CarInsurance');

describe("Create a New Product", function() {

  it("should get a new Product", function() {
    const productList = new CarInsurance([ new Product("Medium Product", 2, 3) ]);
    const products = productList.products;
    products.should.be.a('array');
  });

    it("should get a new array empty", function() {
    const productList = new CarInsurance();
    const products = productList.products;
    products.should.be.a('array');
  });

});

