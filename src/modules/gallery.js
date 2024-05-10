const gallery = (galleryItemClass, galeryCntClass, galleryFullClass) => {
	const galleryItems = document.querySelectorAll(`.${galleryItemClass}`)
	const galeryCnt = document.querySelector(`.${galeryCntClass}`)
	const galleryFullImage = document.querySelector(`.${galleryFullClass}`)

	galleryItems.forEach(e => {
		e.addEventListener('click', event => {
			event.preventDefault()
			let item = event.target.closest(`.${galleryItemClass}`);
			if(event.target.closest(`.${galleryItemClass}`) == item){
				galleryFullImage.src = item.getAttribute('href')
				galeryCnt.classList.add('active')
			}
		})
	})
	if(galeryCnt){
		galeryCnt.addEventListener('click', e => {
			if(!e.target.closest(`.${galleryFullClass}`)){
				galeryCnt.classList.remove('active')
			}
		})
	}
}

export default gallery