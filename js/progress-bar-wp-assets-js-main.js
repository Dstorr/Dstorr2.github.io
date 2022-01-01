(function (jQuery) {
 "use strict";
    
/*-----------------------------
	Menu Stick
---------------------------------*/
    jQuery(window).on('scroll',function() {
        if (jQuery(this).scrollTop() > 1){  
            jQuery('.sticker').addClass("stick");
        }   
        else{
            jQuery('.sticker').removeClass("stick");
        }
    });

/*----------------------------
    Wow js active
------------------------------ */
    new WOW().init();
 
/*--------------------------
    ScrollUp
---------------------------- */	
	jQuery.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
    

})(jQuery); 
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */