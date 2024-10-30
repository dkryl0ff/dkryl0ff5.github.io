function click1(event) {
	event.preventDefault()
	if (document.getElementById('item').value === '') {
		alert('Вы не выбрали товар')
		return
	}

	let good__price = parseInt(document.getElementById('item').value)
	let x = document.getElementById('amount').value.match(/^[1-9]\d*$/)
	if (x === null) {
		alert('Введите целое число')
		return
	}

	let good__amount = parseInt(x)
	let res = document.getElementById('result')
	res.textContent = String('Общая стоимость товара: ' + good__price * good__amount + " руб.")
	return false
}

window.addEventListener('DOMContentLoaded', function () {
	let b = document.getElementById('button')
	b.addEventListener('click', click1)
})