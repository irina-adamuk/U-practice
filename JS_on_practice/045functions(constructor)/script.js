'use strict';
// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function() {
      console.log(`Hello ${this.name}`);
   };
}

// ! ***************** Новый формат создания *********************
class User {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
   }
   hello() {
      console.log(`Hello ${this.name}`);
   }
   exit() {
      console.log(`Пользователь ${this.name} ушел`);
   }
}
// ! ****************************************************************

// функция добавления методов в объект, когда мы не можем обратиться к нему на прямую

User.prototype.exit = function(name) {
   console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 25);

ivan.exit();
alex.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);




