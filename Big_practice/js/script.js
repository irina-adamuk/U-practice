window.addEventListener('DOMContentLoaded', () => {
   
   // ! TABS ******************************************************
   const tabs = document.querySelectorAll('.tabheader__item'),
         tabsContent = document.querySelectorAll('.tabcontent'),
         tabsParent = document.querySelector('.tabheader__items');

   function hideTabContent () {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent (i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent(0);

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if(target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });

   // ! TIMER *******************************************************

   const deadline = '2021-04-01';

   function getTimeRemaining(endtime) {

      // здесь мы получаем количество миллисекунд до конечного времени
      const t = Date.parse(endtime) - Date.parse(new Date()),
            
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // сколько суток осталось до дедлайна
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds,
      };
   }

   // функция проверяет состоит ли число из 1 цифры, если да, до к ней добавляет 0
   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }
   
   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

      // ? Мы вручную вызываем updateClock(), чтобы убрать мигание в верстке при загрузке
      updateClock();
      
      function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock('.timer', deadline);

   // ! MODAL *******************************************************

   const modalTrigger = document.querySelectorAll('[data-modal]'),
         modal = document.querySelector('.modal'),
         modalCloseBtn = document.querySelector('[data-close]');


   function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');

      // (вариант2) modal.classList.toggle('show');

      // ? Во время открытия модального окна, этот стиль не дает прокручивать страницу
      document.body.style.overflow = 'hidden';

      // Если клиент сам открыл модальное окно без нашего участия, то окно окрывать не нужно
      clearInterval(modalTimerId);
   }

   modalTrigger.forEach(btn => {
      btn.addEventListener('click', openModal);
   });

   function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');

      // (вариант 2) modal.classList.toggle('hide');

      // ? Когда мы закрываем модальное окно необходимо восстановить скролл на странице
      document.body.style.overflow = ''; // браузер сам автоматически решит, что нужно изменить
   }
   

   modalCloseBtn.addEventListener('click', closeModal);

   // ? чтобы при нажатии на серое поле, модальное окно закрывалось
   modal.addEventListener('click', (e) => {
      if (e.target === modal) {
         closeModal();
      }
   });

   // ? чтобы при нажатии на кнопку esc модальное окно закрывалось

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) { // нажатие на кнопку Escape
         closeModal();
      }
   });


   
   const modalTimerId = setTimeout(openModal, 5000);

   function showModalByScroll() {
      // если клиент долистал до конца страницы, то показываем модальное окно
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModal();
         window.removeEventListener('scroll', showModalByScroll);
      }
   }

   window.addEventListener('scroll', showModalByScroll);



   // ! MODAL *******************************************************
});