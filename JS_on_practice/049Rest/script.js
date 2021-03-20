'use strict';
const log = function (a, b, ...rest) {
   console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');

// ...rest оператор создает массив из элементов


// ? Параметры по умолчанию

// function calcOrDouble(number, basis) {
//    // ! basis = basis || 2; старый вариант
//    console.log(number * basis);
// }

// calcOrDouble(3, 5);

function calcOrDouble(number, basis = 2) {
   
   console.log(number * basis);
}

calcOrDouble(10);