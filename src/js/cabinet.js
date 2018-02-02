//left menu
//= source/left-catalog-menu.js


//Tooltip plugin
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//Start Flash Timer
$(function () {
    $("#DateCountdown").TimeCircles();
});

//filter
//= source/catalog-filter.js

//side show hide
$(function () {
    $('#showSide').click(function (e) {
        $('.side-content').slideToggle()
    });
});

//live search dropdown
$(function () {
    $('.search-input').click(function () {
        $(this).toggleClass('act');
        $('.top-serch-block--result').toggleClass('act');
    });
});





// add to cart and add to wish list
//= source/add-to.js

//= source/mobile-catalog.js

//Demo show Cart Error Popup
function ShowCartErrorPopup() {
    $('#cartErrorPopup').modal('show');
}


// add catalog menu script
//= source/top-catalog.js

//categories border with auto row height
//= source/categories-auto-height.js