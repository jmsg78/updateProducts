const expect = require('chai').expect;

const { Product } = require('../src/coTest');
const { CarInsurance } = require('../src/CarInsurance');
const { ProductSuperSale } = require('../src/ProductSuperSale');

describe("Create a New  Super Sale Product", function() {

  it("should create a new Super Sale Product #1 degrade one day ", function() {
    const productList = new CarInsurance([ new ProductSuperSale("Super Sale", 3, 6) ]);
    const products = productList.updatePrice();
    expect(products[0].sellIn).equal(2);
  });

  it("should create a new Super Sale Product #2 degrade in price twice as fast as normal Products.", function() {
    const productList = new CarInsurance([ new ProductSuperSale("Super Sale", 3, 6) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(4);
  });

   it("should create a new Super Sale Product #3 when price < 0.", function() {
    const productList = new CarInsurance([ new ProductSuperSale("Super Sale", 3, -1) ]);
    const products = productList.updatePrice();
    expect(products[0].price).equal(0);
  });

});

