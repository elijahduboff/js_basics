/*Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению:
*/
'use strict';
let result = 10 + 10 + "10"; // Движок сложил два числа, получилось 20, потом число 20 в неявном виде привел в строку и сделал конкатенацию
console.log(result);
result = 10 + "10" + 10; // Движок привел числа к строке и сделал конкатенацию строк
console.log(result);
result = 10 + 10 + +"10"; // Движок сложил два числа, третью строку привел к числу с помощью унарного плюса и сложил
console.log(result);
result = 10 / -""; // Движок привел пустую строку к -0 с помощью унарного минуса и разделил 10 на -0
console.log(result);
result = 10 / +"2,5" //Движок не привел строку к числу, в результате деления числа на строку получили Nan
console.log(result);

