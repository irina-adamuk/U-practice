'use strict';

// const person = {
//    name: 'Alex',
//    tel: '+74444444',
// };

// console.log(JSON.stringify(person));

// console.log(JSON.parse(JSON.stringify(person)));

// ? Глубокое копирование

const person = {
   name: 'Alex',
   tel: '+74444444',
   parents: {
      mom: 'Olga',
      dad: 'Mike',
   }
};

const clone = JSON.parse(JSON.stringify(person));
console.log(clone);

