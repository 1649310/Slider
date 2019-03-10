
$(document).ready(function(){

	// эмулирование

	$('.lang__link').on('click', function(e) {
		e.preventDefault();
		$('.lang__link').removeClass('lang__link_active');
		$(this).toggleClass('lang__link_active');
	});
	$('.currency__link').on('click', function(e) {
		e.preventDefault();
		$('.currency__link').removeClass('currency__link_active');
		$(this).toggleClass('currency__link_active');
	});

	// Pop up  

	$('.menu__link-js').on('click', function(e) {
		e.preventDefault();
		$('.pop-up').addClass('open');
	});

	$('.form__button_close').on('click', function(e) {
		e.preventDefault();
		$('.pop-up').removeClass('open');
	});


	// Slider
	$('.slider__list').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			  {
			breakpoint: 1024,
			settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
		{
			breakpoint: 600,
			settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
		{
			breakpoint: 480,
			settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		]
	  });

});

