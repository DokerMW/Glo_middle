const sendForm = ({formId, someElement = []}) => {
	const form = document.getElementById(formId);

	const validate = (list) => {
		let success = true;

		list.forEach(input => {
			
			if(!input.classList.contains('success')){
				success = false;
				
			}
		})
		return success
	}

	const sendData = (data) => {
		return fetch('http://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json'
			}
		})
		.then(res => res.json())
	}

	const submitForm = () => {
		const formElements = form.querySelectorAll('input')
		const formData = new FormData(form)
		const formBody = {}


		formData.forEach((key, val) => {
			formBody[val] = key
		})

		someElement.forEach(e => {
			const element = document.getElementById(e.id)
			if(element){
				if(e.type === 'block'){
					formBody[e.id] = element.textContent
				} 
				if(e.type === 'input'){
					formBody[e.id] = element.value
				}
			}
		})

		if(validate(formElements)){

			sendData(formBody)
			.then(data => {
				formElements.forEach(input => {
					input.value = ''
				})
			})
			.catch(error => {
			
			})
		} else {
			alert('Данные не валидны!')
		}
		
	}

	try {
		if(!form){
			throw new Error('Ошибка! Нет формы')
		}
		form.addEventListener('submit', e => {
			e.preventDefault();
			submitForm()
		})

	} catch (error){
		
	}

	
}

export default sendForm