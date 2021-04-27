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
         modal = document.querySelector('.modal');


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
   
   // ? чтобы при нажатии на серое поле, модальное окно закрывалось
   modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
         closeModal();
      }
   });

   // ? чтобы при нажатии на кнопку esc модальное окно закрывалось

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) { // нажатие на кнопку Escape
         closeModal();
      }
   });


   
   const modalTimerId = setTimeout(openModal, 50000);

   function showModalByScroll() {
      // если клиент долистал до конца страницы, то показываем модальное окно
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModal();
         window.removeEventListener('scroll', showModalByScroll);
      }
   }

   window.addEventListener('scroll', showModalByScroll);



   // ! CARDS *******************************************************
   // ? Используем классы для карточек

   class MenuCard {
      constructor (src, alt, title, description, price, parentSelector, ...classes) { // ...classes - это ...rest оператор
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.description = description;
         this.price = price;
         this.classes = classes;
         this.parent = document.querySelector(parentSelector); // получаем родителя, куда вставлять карточки
         this.transfer = 27;
         this.changeToUAH(); // метод можно вызывать в самом конструкторе
      }

      changeToUAH() {
         this.price = this.price * this.transfer;
      }

      render() {
         const element = document.createElement('div');

         if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
         } else {
            this.classes.forEach(className => element.classList.add(className));
         }

         
         element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
         this.parent.append(element);
      }
   }

   new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container',

   ).render();

   new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      'Меню “Премиум”',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      14,
      '.menu .container',

   ).render();

   new MenuCard(
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      21,
      '.menu .container',

   ).render();

   // ! Forms
   // ? Обычный вариант через formData
   // const forms = document.querySelectorAll('form');

   // const message = {
   //    loading: 'Загрузка',
   //    success: 'Спасибо! Скоро мы с Вами свяжемся',
   //    failure: 'Что-то пошло не так...',
   // };

   // forms.forEach(item, () => {
   //    postData(item);
   // });

   // function postData(form) {
   //    form.addEventListener('submit', (e) => {
   //       e.preventDefalt();

   //       const statusMessage = document.createElement('div');
   //       statusMessage.classList.add('status');
   //       statusMessage.textContent = message.loading;
   //       form.append(statusMessage);

   //       const request = new XMLHttpRequest();
   //       request.open('POST', 'server.php');

   //       request.setRequestHeader('Content-type', 'multipart/form-data');

   //       const formData = new FormData(form);

   //       request.send(formData);

   //       request.addEventListener('load', () => {
   //          if(request.status === 200) {
   //             console.log(request.response);
   //             statusMessage.textContent = message.success;
   //             form.reset();
   //             setTimeout(() => {
   //                statusMessage. remove();
   //             }, 2000);
   //          } else {
   //             statusMessage.textContent = message.failure;
   //          }
   //       });
   //    });
   // }

   // ? Вариант 2 через JSON
   const forms = document.querySelectorAll('form');

   const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо! Скоро мы с Вами свяжемся',
      failure: 'Что-то пошло не так...',
   };

   forms.forEach(item => {
      postData(item);
   });

   function postData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();

         const statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
         form.insertAdjacentElement('afterend', statusMessage);

         const request = new XMLHttpRequest();
         request.open('POST', 'server.php');

         request.setRequestHeader('Content-type', 'application/json');

         const formData = new FormData(form);
         const Object = {};
         formData.forEach(function(value, key) {
            Object[key] = value;
         });

         const json = JSON.stringify(Object);


         request.send(json);

         request.addEventListener('load', () => {
            if(request.status === 200) {
               console.log(request.response);
               showThanksModal(message.success);
               form.reset();
               statusMessage. remove();
            } else {
               showThanksModal(message.failure);
            }
         });
      });
   }


   function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      openModal();

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');

      thanksModal.innerHTML = 
      `<div class="modal__content">
         <div class="modal__close" data-close>x
            <div class="modal__title">
               ${message}
            </div>
         </div>
      </div>`;

      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.removw('hide');
         closeModal();
      }, 4000);
   }

});