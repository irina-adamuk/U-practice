'use strict';

//1/ •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5; alert( x++ );
// ! ответ 5
//2/ •	Чему равно такое выражение: [ ] + false - null + true ?
[ ] + false - null + true
console.log([ ] + false); // false
console.log(false - null); // NaN
console.log(null + true); // NaN
// ! Ответ NaN
//3/ •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; let x = y = 2; alert(x);
// ! Ответ 2
//4/ •	Чему равна сумма [ ] + 1 + 2?
console.log([ ] + 1 + 2);
// ! Ответ 12
//5/ •	Что выведет этот код: alert( "1"[0] )?
alert( "1"[0] );
// ! Ответ 1
//6/ •	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined);
// ! Ответ null && запинается на лжи
//7/ •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!( 1 && 2 ) === (1 && 2));
// ! Ответ false
//8/ •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert( null || 2 && 3 || 4 );
// ! Ответ 3
//9/ •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// ! Ответ false
//10/ •	Что выведет этот код: alert( +"Infinity" ); ?
// ! Ответ Infinity
//11/ •	Верно ли сравнение: "Ёжик" > "яблоко"?
// ! Ответ false
//12/ •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// ! Ответ 2