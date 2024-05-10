const smoothScroll = (elem) => {
	const upBtn = document.querySelector(elem)
	upBtn.style.display = 'none';

	window.addEventListener('scroll', function () {
		if(window.scrollY > 500){
			upBtn.style.display = 'inline-block';
		} else{
			upBtn.style.display = 'none';
		}
	});
	
	upBtn.addEventListener('click', event =>  {
		event.preventDefault();
		const blockID = upBtn.getAttribute('href').substr(1)
		
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}	

export default smoothScroll;