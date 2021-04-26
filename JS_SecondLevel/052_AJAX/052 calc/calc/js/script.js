'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
   const request = new XMLHttpRequest();
// ! request.open(method, url, async, login, password);
// ? метод open собирает настройки, которые помогают сделать запрос
// ? первый аргумент method для запроса(get или post);
// ? url путь к нашему серверу
// ? async ассинхронный по умолчанию true
   request.open('GET', 'js/current.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send(); // отправляем запрос
   // ? readystatechange
   // request.addEventListener('readystatechange', () => {
   //    if(request.readyState === 4 && request.status === 200) {
   //       console.log(request.response);
   //       const data = JSON.parse(request.response);
   //       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
   //    } else {
   //       inputUsd.value = "Что-то пошло не так"ж
   //    }
   // });

   request.addEventListener('load', () => {
      if (request.status === 200) {
         const data = JSON.parse(request.response);
         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
      } else {
         inputUsd.value = "Что-то пошло не так";
      }
   });
});
// ? свойства:

// status
// satusText
// response
// redyState

// ? события:
// onreadystatechange
// abort
// error
// load
// loadend
// loadstart
// progress
// timeout


