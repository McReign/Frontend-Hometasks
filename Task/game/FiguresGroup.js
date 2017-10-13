var FiguresGroup = function FiguresGroup(figures_limit_length) {
    this._figures_limit_length = figures_limit_length;
    this._figures = [];
};

/**
 * @description Добавляет фигуру в коллекцию фигур на поле.
 * @param figure
 */
FiguresGroup.prototype.add = function (figure) {
    //...
};

/**
 * @description Возвращает фигуры, который в данный момент на поле.
 * @returns {Figure[]} figures
 */
FiguresGroup.prototype.getFigures = function () {
    //...
};

/**
 * @description Удаляет все фигуры с поля
 */
FiguresGroup.prototype.clear = function () {
    //...
};

/**
 * @description Удаляет заданную фигуру с поля по ее ID.
 * @param {Figure} figure
 */
FiguresGroup.prototype.remove = function (figureID) {
    //...
};