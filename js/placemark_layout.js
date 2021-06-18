ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [31.230871, 121.470462],
        zoom: 10
    });
    // Создадим макет метки.
    var animatedLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark"></div>',
        {
            build: function () {
                animatedLayout.superclass.build.call(this);
                var element = this.getParentElement().getElementsByClassName('placemark')[0];
                // Если метка выбрана, то увеличим её размер.
                var size = this.isActive ? 60 : 34;
                // При задании для метки своего HTML макета, фигуру активной области
                // необходимо задать самостоятельно - иначе метка будет неинтерактивной.
                // Создадим фигуру активной области "Круг".
                var smallShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
                var bigShape = {type: 'Circle', coordinates: [0, -30], radius: size / 2};
                // Зададим фигуру активной области.
                this.getData().options.set('shape', this.isActive ? bigShape : smallShape);
                // Если метка выбрана, то зададим класс и запустим анимацию.

            }
        }
    );
    map.geoObjects.add(new ymaps.Placemark([31.230871, 121.470462], {}, {
        iconLayout: animatedLayout,
        hasBalloon: false
    }));
});