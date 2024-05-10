import { animate } from "./helpers";

const modal = (btnClass, popupClass, popupClose, overlayClass) => {
	const buttons = document.querySelectorAll(`.${btnClass}`);
	const modal = document.querySelector(`.${popupClass}`);
	const overlay = document.querySelector(`.${overlayClass}`);
	const windowInnerWidth = window.innerWidth;

	buttons.forEach(e => {
		e.addEventListener('click', ()=>{
			if(windowInnerWidth > 768){
				modal.style.display = 'block';
				overlay.style.display = 'block';
				animate({
					duration: 200,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress){
						modal.style.opacity = progress
						overlay.style.opacity = progress
					}
				})
			} else {
				modal.style.display = 'block';
				overlay.style.display = 'block';
			}
		})
	})

window.addEventListener('click', e=>{
		if(e.target.classList.contains(popupClose) || 
			e.target.closest(`.${overlayClass}`)
		){
				modal.style.display = 'none';
				overlay.style.display = 'none';
		}
	})
}

export default modal;