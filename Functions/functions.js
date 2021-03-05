'use strict';

function ret() {
   let num = 50;

   //

   return num;
}

const anotherNum = ret();
console.log(anotherNum);

// такую функцию можно вызвать только после ее объявления
const logger = function() {
   console.log('Hello');
};

logger();

// Стрелочные функции

const calc = (a, b) => {return a + b};
// если функция в одну строчку можно записать без фигурных скобок const calc = (a, b) => a + b;
// если у функции один аргумент , то можно писать const calc = a => a + b;
// если функция разростается

const calc = (a, b) => {
   console.log('1');
   return a + b;
};
