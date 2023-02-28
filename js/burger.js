$(document).ready(function(){
	// $('.slider__body').slick({
	// 	arrows:false,
	// 	dots:true,
	// 	adaptiveHeight:true,
	// 	infinite:true,
	// 	autoplay:true,
	// 	autoplaySpeed:2000
	// });
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu, .header__logo').toggleClass('active');
	});
});