const expect = require("chai").expect;
const should = require('chai').should();

const { Product } = require("../src/coTest");
const { CarInsurance } = require("../src/CarInsurance");

describe("Create a New Product", function () {
  it("should get a new Product", function () {
    const productsAtDayZero = [
      new Product("Medium Coverage", 10, 20),
      new Product("Full Coverage", 2, 0),
      new Product("Low Coverage", 5, 7),
      new Product("Mega Coverage", 0, 80),
      new Product("Special Full Coverage", 15, 20),
      new Product("Super Sale", 3, 6),
    ];
    const productList = new CarInsurance(productsAtDayZero);
    const products = productList.products;
    products.should.be.a('array');
  });


    it("should get a new array empty", function() {
    const productList = new CarInsurance();
    const products = productList.products;
    products.should.be.a('array');
  });


    it("should get a new array empty", function() {
    const productList = new CarInsurance([]);
    const products = productList.updatePrice(); 
    
    products.should.be.a('array');
  });


});
