// 'use strict'
// new WOW({
// 	animateClass: 'animate__animated',
// }).init()

let swiper = new Swiper('.gallery-swiper', {
	autoHeight: false,
	loop: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 80,
	pagination: {
		el: '.gallery-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.gallery__btn-next',
		prevEl: '.gallery__btn-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 15,
		},
		1058: {
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 80,
		},
	},
})



let swiperAdvantages = new Swiper('.advantages-mobile', {
	loop: true,
	slidesPerView: 1,
	pagination: {
		el: '.gallery-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.gallery__btn-next-adv',
		prevEl: '.gallery__btn-prev-adv',
	},
	breakpoints: {
		769: {
			slidesPerView: 1,
		},
	},
})

let swiperPortfolioButtons = new Swiper('.portfolio-buttons-mobile', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	freeMode: true,
	initialSlide: 0,
});







let swiperPortfolioGrid = new Swiper('.portfolio-grid-mobile', {
	loop: true,
	slidesPerView: 1,
	pagination: {
			el: '.grid-swiper-pagination',
			type: 'fraction',
	},
	navigation: {
			nextEl: '.grid-swiper-next-gr',
			prevEl: '.grid-swiper-prev-gr',
	},
	breakpoints: {
			769: {
					slidesPerView: 1,
			},
	},
});