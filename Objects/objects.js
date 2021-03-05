'use strict';

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red',
   },
   makeTest() {
      console.log('test');
   }
};

options.makeTest();
// console.log(options.name);
// delete options.name;
// console.log(options);

// use this cycle for object
// let counter = 0;
// for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Prop ${i} has value ${options[key][i]}`);
//          counter++;
//       } 
//    } else {
//       console.log(`Prop ${key} has value ${options[key]}`);
//       counter++;
//    }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// const myFlat = {
//    adress: {
//       city: 'Bryansk',
//       street: 'Sovetskaya',
//       flat: 48,
//       flor: 9,
//    },
//    numberOfRooms: 2,
//    furniture: true,
//    toilet: 'separeted',
// };

// console.log(Object.keys(myFlat).length);

// ? Дестуктуризация объекта

const {border, bg} = options.colors;
console.log(border);





