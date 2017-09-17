(function ($) {
	"use strict";

    jQuery(document).ready(function($){


      $('.slider-inner').owlCarousel({
          items: 1,
          autoplay: true,
          loop: true,
          nav: true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      });

      $('.testi-slider').owlCarousel({
          items: 1,
          autoplay: true,
          loop: true,
          nav: true,
          dots: false,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      });


      $('.download-slider').owlCarousel({
          items: 1,
          autoplay: true,
          loop: true,
          nav: true,
          dots: false,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	