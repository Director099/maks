'use strict';

$(function () {
    $.scrollUp({
        scrollText: '',
    });
});

var wow = new WOW({
  mobile: false
});
wow.init();

// Плавный скол с навигации

var nav = $(".navigation__item > a");
var down = $(".scroll-down");

function scroll(item) {
  item.click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
};

scroll(nav);
scroll(down);
