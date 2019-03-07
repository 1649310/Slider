jQuery(function($){
	$('.accordion__item-head').on('click', function(e){ 
		$('.accordion__item').removeClass('open'); 
		$(this).parent('.accordion__item').toggleClass('open');
	});
})