'use strict';

const arr = [10, 92, 31, 4, 5];
arr.sort(compareNumbers);

function compareNumbers(a, b) {
   return a - b;
}

// arr.pop(); // удаляет последний элемент массива
// arr.push(10); // добавляет последний элемент в массив


// for( let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// console.log('***');

// ? Плюсом этого цикла явлется то, что мы можем использовать break, continue если понадобится остановить цикл.
// for (let value of arr) {
//    console.log(value);
// }

// console.log(arr.length);

// ! В этом методе нельзя использовать break, continue
arr.forEach(function(item, i, arr) {
   console.log(`${i}: ${item} in the array ${arr}`);
});

// const str = prompt('', '');
// const products = str.split(', ');

// console.log(products.join('; '));





