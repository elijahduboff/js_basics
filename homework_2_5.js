'use strict';
/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
var adding = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x + y;
    }
}
var multiplication = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x * y;
    }
}
var difference = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x - y;
    }
}
var division = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Ошибка, функция принимает только числа');
    } else {
        return x / y;
    }
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case adding:
            return adding(arg1, arg2);
        case multiplication:
            return multiplication(arg1, arg2);
        case difference:
            return difference(arg1, arg2);
        case division:
            return division(arg1, arg2);
        default:
            throw new Error('Выбрана отсутствующая математическая операция');
    }
}
console.log(mathOperation(10, 5, division));
