// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebP() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}

export function changePrice() {
	const switchToggle = document.querySelector('#switch')
	const basicPrice = 35
	const standardPrice = 54
	const premiumPrice = 85
	const sale = 20
	const priceElements = document.querySelectorAll('.price')
	const prices = [basicPrice, standardPrice, premiumPrice]
	switchToggle.addEventListener('change', e => {
		if (e.currentTarget.checked === false) {
			priceElements?.forEach((elem, ind) => {
				elem.innerText = prices[ind]
			})
		} else {
			priceElements?.forEach((elem, ind) => {
				let priceYear = prices[ind] * 12
				let salePriceYear = (prices[ind] * 12 * sale) / 100
				elem.innerText = Math.round((priceYear - salePriceYear) / 12)
			})
		}
	})
}
