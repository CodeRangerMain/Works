ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [58.288641, 56.407337],
        zoom: 15
    })
    myPlacemark = new ymaps.Placemark([58.288641, 56.407337], {
        balloonContentHeader: "Цветок гостевой дом.",
        balloonContentBody: "Пермский край, поселок Полазна, ул. Парковая 25",
        balloonContentFooter: "Номера от 1000 рублей.",
        hintContent: "Цветок гостевой дом."
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl', { left: 5, top: 5 });
}


