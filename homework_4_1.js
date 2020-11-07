'use strict';
/*
*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор *Product, который принимает параметры name и price, сохраните их как свойства *объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, *который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод *make25PercentDiscount не должен быть внутри функции-конструктора, и также не *нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/
// стиль es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
//Добавляю функцию в прототип
Product.prototype.make25PercentDiscount = function () {
    return this.price * 0.75;
};
//стиль es6
class ProductNew {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }

    make25PercentDiscount() {
        return this.price * 0.75;
    }
}
// Создаю объект из функции конструктора
let product1 = new Product('цветы', 2000);
console.log(product1.name);
console.log(product1.price);
console.log(product1.make25PercentDiscount());
// Создаю объект в стиле es6
let product2 = new ProductNew('букет', 5000);
console.log(product2.name);
console.log(product2.price);
console.log(product2.make25PercentDiscount());



