'use strict';
/*
 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
*/
function adding(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x + y;
    }
}
function multiplication(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x * y;
    }
}
function difference(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x - y;
    }
}
function division(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x / y;
    }
}
console.log(adding(10, 5));
console.log(multiplication(10, 5));
console.log(difference(10, 5));
console.log(division(10, 5));

