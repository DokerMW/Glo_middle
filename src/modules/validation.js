const validation = () => {
	const allInputs = document.querySelectorAll('input');
	const forms = document.querySelectorAll('form[id^="form"]');
	const testPhone = /^\+?[0-9][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
	const testName = /[а-яА-Яa-zA-Z\\s]+/;

	forms.forEach(e => {
		let allInputs = document.querySelectorAll('input');		
			e.addEventListener('submit', event => {
				allInputs.forEach(e => {
					if(e.classList.contains('success')){
						e.classList.remove('success')
					}
				})
				let inputTel = event.target.querySelector('input[name="phone"]');
				let inputName = event.target.querySelector('input[name="fio"]');
				if(testPhone.test(inputTel.value)){
						inputTel.classList.add('success')
				} else{
					event.preventDefault();
						inputTel.classList.add('error')
				}
				if(testName.test(inputName.value)){
						inputName.classList.add('success')
				} else{
					event.preventDefault();
						inputName.classList.add('error')
				}
			});
		})

		allInputs.forEach(e => {
				e.addEventListener('focus', event => {
					if(event.target.classList.contains('error')){
						event.target.classList.remove('error')
					}
				});
				})
}
export default validation;