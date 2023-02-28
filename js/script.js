$(document).ready(function(){

const tabsBtns = document.querySelectorAll('.tabs-btns__link');
const tabsItems = document.querySelectorAll('.tabs-items__item');

tabsBtns.forEach(function(item) {
	item.addEventListener("click", function() {
		tabsBtns.forEach(function(item){
			item.classList.remove('active');
		});
		item.classList.add('active');
		let tabsId = item.getAttribute('data-tab');
		let tabsItem = document.querySelector(tabsId);
		tabsItems.forEach(function(item){
			item.classList.remove('active');
		});
		tabsItem.classList.add('active');
	});
});

$('.team__body').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
});
$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
});
$('.slider-news').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
});

$(function fixedH(){
	const header = $('.header');
	const imageblock = $('.imageblock');
	let imageblockH = imageblock.innerHeight() - 10;
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, imageblockH);

	$(window).on("scroll resize", function(){
		let scrollPos = $(window).scrollTop();
		let imageblockH = imageblock.innerHeight() - 10;

		checkScroll(scrollPos, imageblockH);
	});

	function checkScroll(scrollPos, imageblockH){
		if (scrollPos > imageblockH) {
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	}
});

$("[data-scroll]").on("click", function(event){
	event.preventDefault();

	let elementId = $(this).data('scroll');
	let elementIdOffSet = $(elementId).offset().top;

	$("html, body").animate({
		scrollTop: elementIdOffSet
	});
});
});