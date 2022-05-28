const sendForm = () => {
	const data = new FormData(document.getElementById('myForm'))
	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'sendmail.php')
	xhr.onload = function () {
		console.log(this.response)
	}
	xhr.send(data)
}
