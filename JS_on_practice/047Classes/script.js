'use strict';

class Rectangle {
   constructor (height, width) {
      this.height = height;
      this.width = width;
   }

   calcArea() {
      return this.height * this.width;
   }
}

// extends - наследование, Rectangle - от чего наследуем
class ColoredRectangleWithText extends Rectangle{
   constructor(height, width, text, bgColor) {

      // ? super(); - всегда должен быть на первом месте в конструкторе
      super(height, width); // ! вызывает суперконструктор родителя (на месте супер свойства родителя)
      this.text = text;
      this.bgColor = bgColor;
   }

   showMyProps() {
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(`Площадь прямоугольника составляет: ${div.calcArea()}`);

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(`Площадь прямоугольника составляет: ${square.calcArea()}`);
// console.log(`Площадь прямоугольника составляет: ${long.calcArea()}`);



