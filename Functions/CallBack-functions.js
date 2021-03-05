'use strict';
function first () {
   // do somthing
   setTimeout(function() {
      console.log(1);
   }, 500);
}

function second() {
   console.log(2);
}

first();
second();

// callback-function

function learnJS(lang, callback) {
   console.log(`I learn: ${lang}`);
   callback();
}

function done() {
   console.log('I have passed this lesson!');
}

learnJS('JavaScript', done);

// learnJS('JavaScript', function () { // сдесь используется анонимная функция
//    console.log('I have passed this lesson!');
// });