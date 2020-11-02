/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на * каждый товар применить скидку 15%, можете использовать метод forEach
*/
'use strict';
const products = [{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
];
products.forEach(function (price, index) {
    products[index].price = price.price * 0.85;
});
console.log(products);