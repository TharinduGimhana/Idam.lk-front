module.exports = (function($){


    var slides = $('.js-slides-show');

    var can = function() {
        return slides && slides.length > 0;
    };

    var run = function() {
        const flexslider = require('flexslider');
        slides.flexslider();
    };


    return {
        "can"       : can,
        "run"       : run
    };



})(jQuery);