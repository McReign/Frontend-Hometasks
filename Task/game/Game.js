/**
 * @description Создает экземпляр игры
 * @param max_figures - принимает макс. кол-во фигур, которые можно поставить на поле мышкой.
 * @constructor
 */
var Game = function Game(max_figures) {
    this.name = "Популяция фигур";
    this.figuresGroup = null;
    this.figuresCounterElement = null;
    this.interval = null;
    this.MAX_FIGURES_NUMBER = max_figures;
    this._inited = false;
};

Game.FIELD = null;

    

/**
 * @description Тут может быть любая логика инициализации игры
 */
Game.prototype.initialize = function () {
    if (FiguresGroup) {
        this.figuresGroup = new FiguresGroup(this.MAX_FIGURES_NUMBER);
    }
    this.figuresCounterElement = document.querySelector('.fields__elements-count');
    this.figuresCounterElement.innerHTML = 0;
    Game.FIELD = document.querySelector('.field');
    
    this._inited = true;
};

/**
 * @description Функция run запускает игру
 */
Game.prototype.run = function () {
    if (!this._inited) {
        this.initialize();
    }

    /* Скрываем кнопку Play */
    var backdrop = document.querySelector('.field__backdrop');
    if (backdrop) {
        backdrop.style.visibility = 'hidden';
    }

    var _this = this;

    Game.FIELD.addEventListener('click', function(event) {
        if(_this.figuresGroup.getFigures().length < _this.MAX_FIGURES_NUMBER){
            var width = getRandom(10,120);
            var height = getRandom(10,120);
            var velocity = getRandom(-10, 10);
            var startX = window.event.clientX;
            var startY = window.event.clientY;
            var figure = null;
            var typeOfFigure = getRandom(1, 4); 

            while(velocity === 0) {
                velocity = getRandom(-10, 10);
            }

            switch(typeOfFigure){
                case 1:    
                    figure = new Ellipse(width, height, velocity, startX, startY);
                    break;
                case 2: 
                    figure = new Ellipse(width, height, velocity, startX, startY);
                    break;
                case 3: 
                    figure = new Rectangle(width, height, velocity, startX, startY);
                    break;
                case 4: 
                    figure = new Square(width, height, velocity, startX, startY);
                    break;
            }

            _this.figuresGroup.add(figure);
            _this.figuresCounterElement.innerHTML++;
        }
        else alert("Достигнуто максимальное количество частиц!");
        
    })

    /* Каждые 1000/40 миллисекунд (40 FPS) вызываем перерисовку фигур с изменившимися координатами */
    var _this = this;
    this.interval = setInterval(function () {
        _this.nextFrame();
    }, 1000/40);
};

/**
 * @description Для каждой фигуры вызывается функция go, которая самостоятельно меняет координаты своей фигуры.
 */
Game.prototype.nextFrame = function () {
    var figures = this.figuresGroup.getFigures();
    for (var figureIndex in figures) {
        figures[figureIndex].go();
    }
};
