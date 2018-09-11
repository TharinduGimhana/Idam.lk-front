/*jshint esversion: 6 */


/*****
 * added main.scss
 */
require('../scss/main.scss');
require('../scss/editor.scss');


/****
 * include thirdparty JS
 */
const $ = require('jquery');
require('flexslider');


// Add your thirdparties here.
//
var app = {
    "ui"        : {}
};


/*------------------------------------*\
 # App files
 \*------------------------------------*/
// app.ui.ismobile = require('./modules/app.ismobile.js');
// app.ui.test = require('./modules/app.test.js');
// app.ui.slides = require('./modules/app.slides.js');



/*------------------------------------*\
 #COLORS
 \*------------------------------------*/
// require('./views/views.hello.jsx');




///
/// run all apps
///
for(var key in app.ui){
    var module = app.ui[key];


    if(typeof module.run !== 'undefined' && typeof module.can !== 'undefined'){
        if(module.can()){
            module.run();
        }
    }
}


