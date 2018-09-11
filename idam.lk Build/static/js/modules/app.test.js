module.exports = (function($){
	
    /*	
		// Add This if necessary  
			var isMobile = require('./app.ismobile.js');
		*/
		
    var can = function() {
        return true;
    };

    var run = function() {
        $('body').append("<h3>Test adds a H3</h3>");
    };

    return {
        can : can,
        run : run
    };



})(jQuery);