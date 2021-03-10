'use strict';

const btn = document.querySelector('button');

// btn.onclick = function () {
//    alert('Click');
// };

btn.addEventListener('click', () => {
   alert('Click');
});

btn.addEventListener('click', () => {
   alert('second Click');
});