module.exports = (function($){

    var picturefill = require('../thirdparty/picturefill.min.js');
    var imagesLoaded = require('imagesLoaded');
    imagesLoaded.makeJQueryPlugin( $ );
    var images = [];
    var imageWatchLock = false;
    var loadingLock = false;


    var imageWatcher = function() {
        window.setInterval(function(){
            if(!imageWatchLock) {
                imageWatchLock = true;

                $('.js-image').each(function(){
                    images.push(this);
                    $(this).removeClass('js-image');
                });

                imageWatchLock = false;
            }
        }, 50);
    };


    var loadImages = function() {

        window.setInterval(function(){

            if(!loadingLock && images.length > 0) {
                loadingLock = true;

                var picture = images.shift();
                var dom = $(picture);

                dom.imagesLoaded(function(){

                    window.setTimeout(function(){
                        dom.find('.sk-fading-circle, .js-space').remove();
                        dom.attr('style', '');
                        dom.addClass('loaded').removeClass('image--to-load');
                        loadingLock = false;
                    }, 300);

                });


                var sources = dom.find('img, source');
                $.each(sources, function() {
                    var src = $(this);
                    src.attr('src', src.data('src'));
                    src.attr('srcset', src.data('srcset'));
                });

                window.picturefill();


            }
            else {
                loadingLock = false;
            }

        }, 50);

    };

    var can = function() {
        return true;
    };

    var run = function() {
        imageWatcher();
        loadImages();


    };

    return {
        can : can,
        run : run
    };

})(jQuery);