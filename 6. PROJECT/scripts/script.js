$(document).ready(function () {
	new WOW({
		animateClass: 'animate__animated',
	}).init()
	let burger = $('#header__burger')
	let menu = $('#dropdown')
	let closeElements = $('.dropdown__link, .dropdown__close')
	let linkForPopup = $('.linkOnPopup')
	let portfolioBtn = $('.portfolio__btn')
	let popup = $('#popup')
	let success_popup = $('#popup__success')
	let popupClose = $('#popup__close')
	let popupSuccessClose = $('#popupSuccessClose')

	let popupForm = $('#popup__form')
	let popupErrors = popup.find('.error')
	let popup_username = $('#popup__userName')
	let popup_user_phone = $('#popup__userPhone')
	let popupСheckbox = $('#popup__agree__checkbox')
	let popup_agree = $('#popup_agree')
	let popup_form_brn = $('#popup__btn')

	let form = $('#order__form')
	let orderErrors = form.find('.error')
	let orderUsername = $('#userName')
	let order_user_phone = $('#userPhone')
	let orderCheckbox = $('#agree__checkbox')
	let order_agree = $('#label-agree')
	let order_btn = $('#order__btn')
	let succesOrder = $('#success__order')

	burger.on('click', function () {
		menu.css('display', 'flex')
	})

	closeElements.on('click', function () {
		menu.css('display', 'none')
	})

	linkForPopup.on('click', function () {
		popup.css('display', 'flex')
	})

	popupClose.on('click', function () {
		popup.css('display', 'none')
	})

	popupSuccessClose.on('click', function () {
		success_popup.css('display', 'none')
	})

	portfolioBtn.on('click', function () {
		portfolioBtn.removeClass('portfolio__btn-active')
		$(this).addClass('portfolio__btn-active')
	})

	popup_form_brn.click(function (e) {
		e.preventDefault()

		if (checkInputsPopup()) {
			$.ajax({
				url: 'https://testologia.ru/checkout',
				method: 'POST',
				data: { name: popup_username.val(), phone: popup_user_phone.val() },
				dataType: 'json',

				success: function (response) {
					if (response.success === 1) {
						popup.css('display', 'none')
						success_popup.css('display', 'flex')
					} else {
						alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
					}
				},
			})
			popupForm[0].reset()
		}
	})

	function checkInputsPopup() {
		let isFormValid = true
		if (!popup_username.val()) {
			popup_username.addClass('error_input')
			popupErrors.eq(0).css('display', 'block')
			isFormValid = false
		} else {
			popup_username.removeClass('error_input')
			popupErrors.eq(0).css('display', 'none')
		}
		if (!popup_user_phone.val()) {
			popup_user_phone.addClass('error_input')
			popupErrors.eq(1).css('display', 'block')
			isFormValid = false
		} else {
			popup_user_phone.removeClass('error_input')
			popupErrors.eq(1).css('display', 'none')
		}
		if (!popupСheckbox.is(':checked')) {
			popup_agree.css('color', 'red')
			isFormValid = false
		} else {
			popup_agree.css('color', 'rgb(28, 28, 28)')
		}
		return isFormValid
	}

	order_btn.click(function (e) {
		e.preventDefault()

		if (checkInputsOrder()) {
			$.ajax({
				url: 'https://testologia.ru/checkout',
				method: 'POST',
				data: { name: orderUsername.val(), phone: order_user_phone.val() },
				dataType: 'json',

				success: function (response) {
					if (response.success === 1) {
						$('#order__form-container').addClass('wow animate__animated animate__slideOutLeft')
						setTimeout(function () {
							$('#order__form-container').css('display', 'none')
							succesOrder.css('display', 'flex')
							succesOrder.addClass('wow animate__animated animate__slideInLeft')
						}, 1000)
					} else {
						alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
					}
				},
			})
			form[0].reset()
		}
	})

	function checkInputsOrder() {
		let isFormValid = true
		if (!orderUsername.val()) {
			orderUsername.addClass('error_input')
			orderErrors.eq(0).css('display', 'block')
			isFormValid = false
		} else {
			orderUsername.removeClass('error_input')
			orderErrors.eq(0).css('display', 'none')
		}
		if (!order_user_phone.val()) {
			order_user_phone.addClass('error_input')
			orderErrors.eq(1).css('display', 'block')
			isFormValid = false
		} else {
			order_user_phone.removeClass('error_input')
			orderErrors.eq(1).css('display', 'none')
		}
		if (!orderCheckbox.is(':checked')) {
			order_agree.css('color', 'red')
			isFormValid = false
		} else {
			order_agree.css('color', 'rgb(28, 28, 28)')
		}
		return isFormValid
	}

	new Swiper('.gallery-swiper', {
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

	new Swiper('.advantages-mobile', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.gallery-pagination-adv',
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

	new Swiper('.portfolio-buttons-mobile', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		freeMode: true,
		initialSlide: 0,
	})

	new Swiper('.portfolio-grid-mobile', {
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
	})
})
