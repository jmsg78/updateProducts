# Compara Test
The solution proposed to complete the Compare test was based on each of the established premises. The respective code revision and refactoring was carried out, making use of object-oriented programming with JavaScript and NodeJs, with which a set of classes and methods were generated that allowed obtaining the expected results. Similarly, a series of tests were carried out using Mocha / Chai JavaScript Test Framework to each of the components of the solution until reaching 100%, which allowed me to check the quality of the results.
The premises and rules required to solve the Compare test are described below:

The code updates the price of products of our business unit, Car Insurance, based on rules explained bellow.
Here you have a description of the products **General**.
- All Products have a `sellIn` value which denotes the number of days we have to sell the product.
- All Products have a `price` value which denotes how much the product cost.
- At the end of each day our system lowers both values for every product.
### **Rules**:
- Once the sell by date has passed, `price` degrades twice as fast.
- The `price` of a product is never negative.
- **"Full Coverage"** actually increases in `price` the older it gets.
- The `price` of a product is never more than 50.
- **"Mega Coverage"**, being a legendary product, never has to be sold or decreases in `price`.
- **"Special Full Coverage"**, like full coverage, increases in `price` as its `sellIn` value approaches:
	- `price` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but.
	- `price` drops to 0 when no more days left (and the product is not valid anymore).
- **"Super Sale"** Products degrade in `price` twice as fast as normal Products.
- Just for clarification, a product can never have its `price` increase above 50, however **"Mega Coverage"** is a
legendary product and as such its `price` is 80 and it never alters.
- On file `products_after_30_days.txt` you could see the behavior of the products in the period of 30 days.
- **The `Super Sale` product is not working properly. You have to implement it.**

# Installation 
Clone the repository
```bash
git clone https://github.com/jmsg78/updateProducts.git
```
Locate the path where you made the download or copy (clone) of the repository, being there, type the following command to obtain the required dependencies of the project.
```bash
npm install
```
Now, if you want to run the tests performed, you can do the following
```bash
npm runt test
```
To obtain the required results, you must run the following command.
```bash
npm run after-30-days
```
