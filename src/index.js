import gallery from './modules/gallery';
import modal from './modules/modal';
import slider from './modules/slider';
import smoothScroll from './modules/smoothScroll';
import timer from './modules/timer';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

smoothScroll('.smooth-scroll')
modal('call-popup','header-modal','header-modal__close','overlay')
modal('service-button','services-modal','services-modal__close','overlay')
gallery('document-inner', 'gallery', 'gallery__image')
timer('15 may 2024', 'countdown_windows', 'count_1 span','count_2 span','count_3 span','count_4 span')
timer('20 may 2024', 'countdown_balcony', 'count_1 span','count_2 span','count_3 span','count_4 span')
timer('25 may 2024', 'countdown_kitchen', 'count_1 span','count_2 span','count_3 span','count_4 span')
slider('benefits', 'benefits__item', 'active_slide', 'benefits-arrows', 'benefits__arrow--left', 'benefits__arrow--right',3)
slider('services-cnt', 'services-item', 'active_slide', 'services-arrows', 'services__arrow--left', 'services__arrow--right',2)
validation()
calc()
sendForm({
	formId: 'form1', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})
sendForm({
	formId: 'form2', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})
sendForm({
	formId: 'form3', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})
sendForm({
	formId: 'form4', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})
sendForm({
	formId: 'form5', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})
sendForm({
	formId: 'form6', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})
sendForm({
	formId: 'form7', 
	someElement: [{
		type: 'input',
		id: 'calc-total'
	}]
})




