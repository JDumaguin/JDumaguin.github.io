(function ($) {

	new WOW().init();
	
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	$('#owl-works').owlCarousel({
            items : 4,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2],
        });
	
	$('.owl-carousel .item a').nivoLightbox({
		effect: 'fadeScale',                             
		theme: 'default',                           
		keyboardNav: true,                          
		clickOverlayToClose: true,                  
		onInit: function(){},                       
		beforeShowLightbox: function(){},           
		afterShowLightbox: function(lightbox){},    
		beforeHideLightbox: function(){},           
		afterHideLightbox: function(){},            
		onPrev: function(element){},                
		onNext: function(element){},                
		errorMessage: 'The requested content cannot be loaded. Please try again later.' 
	});
	
	
        if ($('.parallax').length)
        {
			$(window).stellar({
				responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }

})(jQuery);
