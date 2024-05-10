const slider = (sliderContainer,slideItem,activeSlide,sliderBtns,arrowLeftId,arrowRightId) =>{
	const sliderBlock = document.querySelector(`.${sliderContainer}`);
	const slides = document.querySelectorAll(`.${slideItem}`);
	const timeInterval = 2000;
	const classData = [
		sliderContainer,
		slideItem,
		activeSlide,
		sliderBtns,
		arrowLeftId,
		arrowRightId
	]

	let wrongClass = false;
	let currentSlide = 0;
	let interval;


	if (!document.querySelector(`.${classData[0]}`) ||
	 !document.querySelector(`.${classData[1]}`)) {
		wrongClass = true;
	} 
	if(wrongClass){
		return
	}
	if(!document.querySelector(`.${classData[1]}`).closest(`.${classData[0]}`)){
		wrongClass = true;
	}

	if(wrongClass){
		return
	}

	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
		elems[index + 1].classList.remove(strClass);
		elems[index + 2].classList.remove(strClass);
	}
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
		elems[index + 1].classList.add(strClass);
		elems[index + 2].classList.add(strClass);
	}

	const autoSlide = () => {
		prevSlide(slides, currentSlide, `${activeSlide}`)
		
		currentSlide = currentSlide + 3

		if(currentSlide >= slides.length){
			currentSlide = 0
		}
		nextSlide(slides, currentSlide, `${activeSlide}`)
	}

	const startSlide = (timer = 2000) => {
		interval = setInterval(autoSlide, timer)
	}

	const stopSlide = () => {
		clearInterval(interval)
	}

	sliderBlock.addEventListener('click', e => {
		e.preventDefault();
		
		if(!e.target.closest(`#${arrowLeftId}`) && !e.target.closest(`#${arrowRightId}`)){
			return
		}

		prevSlide(slides, currentSlide, `${activeSlide}`)
		
		if(e.target.closest(`#${arrowRightId}`)){
			currentSlide = currentSlide + 3
		}
		if(e.target.closest(`#${arrowLeftId}`)){
			currentSlide = currentSlide - 3
		}
		if(currentSlide >= slides.length){
			currentSlide = 0
		}
		if(currentSlide < 0){
			currentSlide = slides.length - 1
		}
		nextSlide(slides, currentSlide, `${activeSlide}`)
	})

	sliderBlock.addEventListener('mouseenter', e => {
		if(e.target.matches(`.${sliderBtns}`)){
			stopSlide();
		}
	}, true)
	sliderBlock.addEventListener('mouseleave', e => {
		if(e.target.matches(`.${sliderBtns}`)){
			startSlide(timeInterval);
		}
	}, true)

	startSlide(timeInterval)

}

export default slider