# Задание

Задание дается по всем пройденным разделам и ничего нового здесь не будет. Вы должны закрепить все свои навыки на сегодняшний момент в этом задании. Спрашивайте меня, если что-то не поняли.
Это задание необходимо выполнить полностью, постарайтесь. На следующей паре уже займемся новыми темами касательно верстки, будет интересно.

Дописать код игры, в которой пользователь может добавлять мышкой на поле новые фигуры, 
каждая из которых должна двигаться в хаотичном направлении и не выходить за рамки поля, т.е. ударяться и отскакивать.

Фигуры могут быть следующими:

* Круг
* Эллипс
* Прямоугольник
* Квадрат
* Любая своя фигура (можно в виде картинки) (данный пункт выполняется, если хотите быть профессионалом)

Для начала требуется реализовать/дописать классы этих фигур, находящиеся в файле ```game/Figure.js```.
При этом требуется задать следующие отношения между фигурами:

Существует базовый класс ```Figure```, в которой заложены все основные общие свойства фигур.

* Класс ```Ellipse``` (эллипс) наследуется от ```Figure``` и добавляет/переопределяет необходимые поля/методы.
* Класс ```Circle``` (круг) наследуется от ```Ellipse``` и добавляет/переопределяет необходимые поля/методы. У круга в качестве параметров конструктора должны стоять только радиус и скорость перемещения.
* Класс ```Rectangle``` (прямоугольник) наследуется от ```Figure``` и добавляет/переопределяет необходимые поля/методы.
* Класс ```Square``` (квадрат) наследуется от ```Rectangle``` и добавляет/переопределяет необходимые поля/методы. У квадрата в качестве параметров конструктора должны стоять только размер и скорость перемещения.

Затем, необходимо добавить обработчик клика по полю, чтобы создать новую фигуру и добавить ее на поле. Обработчик необходимо добавить в классе ```Game```.
Созданную фигуру (созданный экземпляр) вы должны добавить в экземпляр класса ```FiguresGroup```, в котором содержится коллекция всех фигур, которая находится на поле. 
Этой коллекция можно управлять с помощью методов ```add```, ```clear```, ```remove```, ```getFigures```. (читайте комментарии в файле ```game/FiguresGroup.js```)
По клику фигура должна создаваться рандомная (одна из 4ех возможных типов) фигура и добавляется в объект выше. Параметры для фигуры должны быть тоже рандомными (ширина, высота, скорость движения) (для круга - радиус, для квадрата - просто размер).

В самом классе ```Figure``` вам необходимо дописать недостающие методы, которые будут создавать ```div``` элемент фигуры с помощью функции 
```var el = document.createElement('div')```, а затем созданный dom-элемент должен вставляться на поле. Например, добавьте в ```Figure``` методы ```createElement``` и ```insertElement```.

Также, необходимо реализовать, чтобы при добавлении новой фигуры на поле изменялось значение счетчика (кол-во частиц на поле), который находится на самой html странице справа сверху.

Подсказка: обновление счетчика легче всего сделать с помощью создания собственного события в момент добавления новой фигуры на поле. Созданием собственного события занимается объект ```CustomEvent```.
В созданное событие в классе FiguresGroup вы можете добавить текущее значение размера коллекции, а принять это событие можете в самом экземпляре класса Game где-нибудь. 
Достаточно просто навесить обработчик вашего события с помощью addEventListener.


#### Условия
* Не разрешается редактировать ```app.js``` и ```index.html```.
* Не создавайте лишних файлов
* Не редактируйте стили, определенные в index.html напрямую. Добавлять свой код разрешается в любом месте в файлах папки ```/game```.

#### Логика работы
Логика работы программы следующая:
Создается экземпляр игры (класса Game), запускается игра с помощью run(). Устанавливается таймер, который каждые n мс вызывает некоторую функцию, в которой вызывается функция ```nextFrame```.
```nextFrame``` — метод, который для каждой фигуры на поле вызывает функцию ```go```.

В функции ```go``` происходит изменение текущих координат текущей фигуры. (Вспомните про top и left).

#### Ресурсы
* CustomEvent: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
* document.createElement: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
* [[HTMLElementTarget]].addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
* [[HTMLElementTarget]].addEventListener: http://javascript.ru/tutorial/events/comparison

####Результат
![Результат](http://cs624324.vk.me/v624324161/5a779/f3wO22qgj1k.jpg)