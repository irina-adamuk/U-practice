'use strict';

// function showThis(a, b) {
//    console.log(this);
//    function sum () {
//       console.log(this);
//       return a + b;
//    }

//    console.log(sum());
// }

// showThis(4, 7);



// const obj = {
//    a: 20,
//    b:15,
//    sum: function() {
//       function shout() {
//          console.log(this);
//       }
//       shout();
//    }
// };

// obj.sum();


// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() {
//       console.log("Hello!" + this.name);
//    };
// }

// let ivan = new User('Ivan', 23);
// console.log(ivan);


// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: 'John',
// };

// // зучное присвоение контекста
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
//    return this * num;
// }

// const double = count.bind(2); // создает новую функцию с контекстом
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this = window, но если 'use strict' - underfined;
// 2) Контекст у методов объекта - свм объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function() { // контекст вызова сам элемент, на котором произошло событие
   // console.log(this);
   this.style.backgroundColor = 'red';
});


const obj = {
   num: 5,
   sayNumber: function() {
      const say = () => {
         console.log(this.num);
      };

      say();
   }
};

obj.sayNumber();

// const double = (a) => {
//    return a * 2;
// };

// ? Если стрелочная функция помещается в одну строчку, то фигурные скобки можно не ставить и return

const double = (a) => a * 2;
console.log(double(9));

// ? Если стрелочная функция принимает 1 аргумент, то его можно писать без круглых скобок
// ? const double = a => a * 2;

// ! В обработчике событий у стрелочной функции теряется контекст, поэтому его необходимо задавать( чаще всего через event.target)

btn.addEventListener('click', (e) => {
   e.target.style.border = '3px solid blue';
});
