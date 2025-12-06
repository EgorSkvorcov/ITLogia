'use strict'
new WOW({
	animateClass: 'animate__animated',
}).init()
let burger = document.getElementById('header__burger')
let menu = document.getElementById('header__menu')
let menuBibl = document.querySelectorAll('#header__menu *')
let formBtn = $('#order__btn')
let product = $('#product')
let userName = $('#name')
let phone = $('#phone')
let erDiv = $('.erDiv')
let form = $('form')
let loader = $('.div__loader')
let succesOrder = $('.succes_order')

burger.onclick = function () {
	menu.classList.add('open')
}

menuBibl.forEach(item => {
	item.onclick = () => {
		menu.classList.remove('open')
	}
})

formBtn.click(function (e) {
	e.preventDefault()
	checkInputs()

	loader.show()
	$.ajax({
		url: 'https://testologia.ru/checkout',
		method: 'POST',
		data: { product: product.val(), name: userName.val(), phone: phone.val() },
		dataType: 'json',

		success: function (response) {
			loader.hide()
			if (response.success === 1) {
				form.addClass('wow animate__animated animate__slideOutLeft')
				setTimeout(function () {
					form.css('display', 'none')
					succesOrder.css('display', 'flex')
					succesOrder.addClass('wow animate__animated animate__slideInLeft')
				}, 1000)
			} else {
				alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
			}
		},
	})

	form[0].reset()
})

function checkInputs() {
	if (!product.val()) {
		product.addClass('er')
		erDiv.eq(0).css('display', 'block')
	} else {
		product.removeClass('er')
		erDiv.eq(0).css('display', 'none')
	}

	if (!userName.val()) {
		userName.addClass('er')
		erDiv.eq(1).css('display', 'block')
	} else {
		userName.removeClass('er')
		erDiv.eq(1).css('display', 'none')
	}

	if (!phone.val()) {
		phone.addClass('er')
		erDiv.eq(2).css('display', 'block')
	} else {
		phone.removeClass('er')
		erDiv.eq(2).css('display', 'none')
	}

	return false
}

$(document).ready(function () {
	$('.products__items').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1061,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 825,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})
})

$(document).ready(function () {
	$('.item__link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		zoom: {
			enabled: true,
			duration: 300,
		},
	})
})
