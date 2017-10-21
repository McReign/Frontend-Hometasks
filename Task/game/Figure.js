/**
 * @description Конструктор класса Figure. Это базовый класс для всех фигур.
 * @param width
 * @param height
 * @param velocity - Скорость
 * @constructor
 */
var Figure = function Figure(width, height, velocity, startX, startY) {
    width = width || 24;
    height = height || 24;
    velocity = velocity || 1;

    Figure.AUTO_INCREMENT++;

    this.id = Figure.AUTO_INCREMENT;
    this.name = 'Неопознаная фигура';
    this.width = width;
    this.height = height;
    this.velocity = velocity;
    this.x = startX;
    this.y = startY;

    this.init();
};

Figure.prototype.init = function () {
    this.createElement(this.width, this.height);
    this.insertElement(this.element);
};

/* статическое поле */
Figure.AUTO_INCREMENT = 0;

Figure.prototype.element = null;

//Figure.prototype.coords = { x: this.startX, y: this.startY};

/**
 * @description Вставляет DOM элемент в поле.
 * @param element
 */

Figure.prototype.createElement = function (width, height, borderRadius, className) {
    var element = document.createElement('div');
    element.classList.add('figure-base');
    element.classList.add(className);
    element.style.position = 'absolute';
    element.style.width = width + 'px';
    element.style.height = height + 'px'; 
    element.style.borderRadius = borderRadius + '%';
    element.style.borderWidth = getRandom(0, 15) + 'px';
    this.element = element;
}


Figure.prototype.insertElement = function (element) {
    element.style.top = this.y + 'px';
    element.style.left = this.x + 'px';
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
    
    var windowWidth = document.querySelector('.field').clientWidth;
    var windowHeight = document.querySelector('.field').clientHeight;

    if(((this.x + this.width) >= windowWidth)
        || ((this.y + this.height) >= windowHeight) 
            || (this.x <= 0) || (this.y <= 0)) {
                this.velocity*=-1;
            }
            
    this.x += this.velocity;
    this.y += this.velocity;
    
    this.element.style.top = this.y + 'px';
    this.element.style.left = this.x + 'px';
};



/**
 * @description Конструктор класса Ellipse. Класс наследуется от Figure и создает элемент "Эллипс".
 * @constructor
 */

var Ellipse = function Ellipse() {
    Figure.apply(this, arguments);
}
    
Ellipse.prototype = Object.create(Figure.prototype);
    
    
Ellipse.prototype.init = function() {
    this.borderRadius = 50;
    this.className = ("figure-circle");
    this.createElement(this.width, this.height, this.borderRadius, this.className);
    this.insertElement(this.element); 
};



/**
 * @description Конструктор класса Circle. Класс наследуется от Ellipse и создает элемент "Круг".
 * @constructor
 */
var Circle = function Circle() {
    Ellipse.apply(this, arguments);
}
    
Circle.prototype = Object.create(Ellipse.prototype);
    
    
Circle.prototype.init = function() {
    this.borderRadius = 50;
    this._width = this.width;
    this._height = this.width;
    this.className = ("figure-circle");
    this.createElement(this._width, this._height, this.borderRadius, this.className);
    this.insertElement(this.element); 
};



/**
 * @description Конструктор класса Rectangle. Класс наследуется от Figure и создает элемент "Прямоугольник".
 * @constructor
 */
var Rectangle = function Rectangle() {
    Figure.apply(this, arguments);
}
    
Rectangle.prototype = Object.create(Figure.prototype);
    
    
Rectangle.prototype.init = function() {
    this.borderRadius = 0;
    this.className = ("figure-rectangle");
    this.createElement(this.width, this.height, this.borderRadius, this.className);
    this.insertElement(this.element); 
};



/**
 * @description Конструктор класса Square. Класс наследуется от Rectangle и создает элемент "Квадрат".
 * @constructor
 */
var Square = function Square() {
    Rectangle.apply(this, arguments);
}
    
Square.prototype = Object.create(Rectangle.prototype);
    
    
Square.prototype.init = function() {
    this.borderRadius = 0;
    this._width = this.width;
    this._height = this.width;
    this.className = ("figure-square");
    this.createElement(this._width, this._height, this.borderRadius, this.className);
    this.insertElement(this.element); 
};