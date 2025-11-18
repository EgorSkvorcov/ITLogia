window.onload = function () {
	let form = document.getElementById('form')
	let fullName = document.getElementById('name')
	let login = document.getElementById('login')
	let agree = document.getElementById('agree')
	let mail = document.getElementById('mail')
	let password = document.getElementById('password')
	let repPassword = document.getElementById('reppassword')
	let button = document.getElementById('submit')
	let popup = document.getElementById('main__popup')
	let popupBtn = document.getElementById('popup__btn')
	let hOne = document.getElementById('h-one')
	let del = document.getElementsByClassName('delete')
	let link = document.getElementById('link')

	fullName.onkeydown = e => {
		if (e.key >= 0 && e.key <= 9) {
			return false
		}
	}

	login.onkeydown = e => {
		if (e.key === '.' || e.key === ',') {
			return false
		}
	}

	agree.onchange = function () {
		if (this.checked) {
			console.log('Согласен')
		} else {
			console.log('Не согласен')
		}
	}

	button.onclick = function (e) {
		e.preventDefault()
		if (fullName.value === '') {
			alert('Заполните поле Full Name')
			return false
		} else if (login.value === '') {
			alert('Заполните поле Your username')
			return false
		} else if (mail.value === '') {
			alert('Заполните поле E-mail')
			return false
		} else if (password.value === '') {
			alert('Заполните поле Password')
			return false
		} else if (repPassword.value === '') {
			alert('Заполните поле Repeat Password')
			return false
		}

		if (password.value.length < 8) {
			alert('Длина пароля должна быть более 8-ми символов')
			return false
		}

		if (password.value !== repPassword.value) {
			alert('Пароли не совпадают')
			return false
		}

		if (!agree.checked) {
			alert('Вы не дали согласие')
			return false
		}
		popup.style.display = 'block'
	}

	function newButton() {
		button.onclick = function (e) {
			e.preventDefault()
			if (login.value === '') {
				alert('Заполните поле Your username')
				return false
			} else if (password.value === '') {
				alert('Заполните поле Password')
				return false
			} else {
				alert(`добро пожаловать ${login.value}`)
			}
		}
	}

	popupBtn.onclick = function () {
		popup.style.display = 'none'

		form.reset()

		hOne.innerText = 'Log in to the system'

		while (del.length > 0) {
			del[0].remove()
		}

		button.innerText = 'Sign In'

		newButton()
	}

	link.onclick = function () {
		hOne.innerText = 'Log in to the system'

		while (del.length > 0) {
			del[0].remove()
		}

		button.innerText = 'Sign In'

		newButton()
	}
	// if (button.textContent === 'Sign In') {
	// button.onclick = null

	// }
}
