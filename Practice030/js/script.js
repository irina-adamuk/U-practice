/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Призрак",
        "Титаник",
        "Русалочка"
    ]
};

// ? 1)
const   adv = document.querySelectorAll('.promo__adv img'),
// это нам понадобится для задания 3
        poster = document.querySelector('.promo__bg'),
// для задания 2
        genre = poster.querySelector('.promo__genre'),
// для задания 4
        movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item => {
    item.remove();
});

// или 
// adv.forEach(function(item) {
//     item.remove();
// });

// ? 2)

genre.textContent = 'драма';

// ? 3)
// мы поменяли путь к картинки
poster.style.backgroundImage = "url('img/bg.jpg')"; 

// ? 4)

movieList.innerHTML = '';
// сортируем фильмы в массиве с помощью метода sort()
movieDB.movies.sort();


movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});
