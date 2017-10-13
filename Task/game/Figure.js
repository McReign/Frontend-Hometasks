/**
 * @description Конструктор класса Figure. Это базовый класс для всех фигур.
 * @param width
 * @param height
 * @param velocity - Скорость
 * @constructor
 */
var Figure = function Figure(width, height, velocity) {
    width = width || 24;
    height = height || 24;
    velocity = velocity || 1;

    Figure.AUTO_INCREMENT++;

    this.id = Figure.AUTO_INCREMENT;
    this.name = 'Неопознаная фигура';
    this.width = width;
    this.height = height;
    this.velocity = velocity;

    this.init();
};

Figure.prototype.init = function () {
    //...
};

/* статическое поле */
Figure.AUTO_INCREMENT = 0;

Figure.prototype.element = null;

Figure.prototype.coords = { x: 0, y: 0 };

/**
 * @description Вставляет DOM элемент в поле.
 * @param element
 */
Figure.prototype.insertElement = function (element) {
    var field = document.querySelector('.field');
    field.appendChild(element);
};

/**
 * @description Функция, которая должна вызываться из класса Game всякий раз, когда нужно изменить координаты для фигуры.
 */
Figure.prototype.go = function () {
    if (!this.element) {
        throw new Error('The element not set');
    }
    /* Тут должна быть логика изменения координат для объекта */
};



/**
 * @description Конструктор класса Ellipse. Класс наследуется от Figure и создает элемент "Эллипс".
 * @constructor
 */
var Ellipse = function Ellipse() {
    //...
};



/**
 * @description Конструктор класса Circle. Класс наследуется от Ellipse и создает элемент "Круг".
 * @constructor
 */
var Circle = function Circle(radius, velocity) {
    //...
};



/**
 * @description Конструктор класса Rectangle. Класс наследуется от Figure и создает элемент "Прямоугольник".
 * @constructor
 */
var Rectangle = function Rectangle() {
    //...
};



/**
 * @description Конструктор класса Square. Класс наследуется от Rectangle и создает элемент "Квадрат".
 * @constructor
 */
var Square = function Square(size, velocity) {

};