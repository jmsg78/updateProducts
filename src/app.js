const { Product } = require('./coTest.js');
const { CarInsurance } = require('./CarInsurance.js');
const { ProductFullCoverage } = require('./ProductFullCoverage');
const { ProductMegaCoverage } = require('./ProductMegaCoverage');
const { ProductFullCoverageSpecial } = require('./ProductFullCoverageSpecial');

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new ProductFullCoverage('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new ProductMegaCoverage('Mega Coverage', 0, 80),
  new ProductMegaCoverage('Mega Coverage', -1, 80),
  new ProductFullCoverageSpecial('Special Full Coverage', 15, 20),
  new ProductFullCoverageSpecial('Special Full Coverage', 10, 49),
  new ProductFullCoverageSpecial('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = (product) =>  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}