var finalPrice = 0;
var squareArea = 0
var typesOfrepairsPrice = 0;
var materialYN = true;
$('.sidebar-menu-element').click(function () {
    $('.sidebar-menu-element').removeClass('active');
    this.classList.add('active')
    let typesOfrepairs = $(this).children('div.menu-element-price').text();
    let Price = parseInt(typesOfrepairs.replace(/\D+/g, ""));
    typesOfrepairsPrice = Price;
    $('#price').text(Price + 'руб')
})

$("#slider").roundSlider({

    radius: 120,
    min: 0,
    max: 160,
    step: 1,
    width: 5,
    handleSize: "+15",
    handleShape: "dot",
    value: "124",
    sliderType: "min-range",
    // Эта функция вернет конечную площадь из слайдера 
    tooltipFormat: function (e) {
        let parts = parseFloat(e.value).toFixed(2).split(".");
        let value = parts[0];
        finalPrice = value * 6 + 34;
        $('#price').text(finalPrice + '000' + ' ' + 'руб')
        return value;
    }
});
$('.sidebar-switcher-button').click(function () {
    $('.sidebar-switcher-button').removeClass('active-switcher');
    $(this).addClass('active-switcher');
    if (this.id === 'yes') {
        materialYN = true;
    }
    else {
        materialYN = false;
    }

});
$('.main-menu-element').click(function () {
    if (this.id === 'submenu') {
        $('.drop-list').removeClass('hiden')
    }
    if (this.id !== 'submenu') {
        $('.drop-list').addClass('hiden')
    }
    $('.main-menu-element').removeClass('main-menu-element-active');
    $(this).addClass('main-menu-element-active')
});

$('.rs-tooltip-text').bind("DOMSubtreeModified", function () {
    squareArea = $(this).text()
});



