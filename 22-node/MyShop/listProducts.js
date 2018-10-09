let faker = require('faker');
console.log(`----------------------
WELCOME TO MY SHOP
========================`);


for (let i = 0; i < 20; i++) {
    console.log(`${faker.commerce.productName()} - $${faker.commerce.price()}`);
}
console.log(`
==========AFTER SHOP==========
`);
faker.seed(10)
// TODO!!!!
// npm install faker