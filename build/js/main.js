/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gallery */ \"./src/modules/gallery.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.smooth-scroll')\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('call-popup','header-modal','header-modal__close','overlay')\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('service-button','services-modal','services-modal__close','overlay')\n;(0,_modules_gallery__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('document-inner', 'gallery', 'gallery__image')\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('15 may 2024', 'countdown_windows', 'count_1 span','count_2 span','count_3 span','count_4 span')\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('20 may 2024', 'countdown_balcony', 'count_1 span','count_2 span','count_3 span','count_4 span')\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('25 may 2024', 'countdown_kitchen', 'count_1 span','count_2 span','count_3 span','count_4 span')\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('benefits', 'benefits__item', 'active_slide', 'benefits-arrows', 'benefits__arrow--left', 'benefits__arrow--right',3)\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('services-cnt', 'services-item', 'active_slide', 'services-arrows', 'services__arrow--left', 'services__arrow--right',2)\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form1', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form2', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form3', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form4', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form5', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form6', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n\tformId: 'form7', \n\tsomeElement: [{\n\t\ttype: 'input',\n\t\tid: 'calc-total'\n\t}]\n})\n\n\n\n\n\n\n//# sourceURL=webpack://diplom-middle/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst calc = () => {\r\n const calcBlock = document.getElementById('calc'); \r\n const calcType = document.getElementById('calc-type'); \r\n const calcTypeMaterial = document.getElementById('calc-type-material'); \r\n const calcSquare = document.getElementById('calc-input'); \r\n const total = document.getElementById('calc-total');\r\n\r\n const countCalc = () => {\r\n\tconst calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n\tconst calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value || 1;\r\n\tcalcSquare.value = calcSquare.value.replace(/[^\\d]+/, \"\");\r\n\tconst calcSquareValue = calcSquare.value;\r\n\r\n\tlet totalValue = 0;\r\n\r\n\tif(!calcTypeValue){\r\n\t\treturn\r\n\t}\r\n\t\r\n\tif(calcType.value && calcSquare.value){\r\n\t\ttotalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue\r\n\t\t\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\t\t\tduration: 500,\r\n\t\t\ttiming(timeFraction) {\r\n\t\t\t\treturn timeFraction;\r\n\t\t\t},\r\n\t\t\tdraw(progress){\r\n\t\t\t\ttotal.value = Math.round(totalValue * progress) \r\n\t\t\t}\r\n\t\t})\r\n\t} else {\r\n\t\ttotalValue = 0;\r\n\t}\r\n\t\r\n }\r\n\r\nif(calcBlock){\r\n\tcalcBlock.addEventListener('change', e =>{\r\n\t\tif(e.target === calcType || e.target === calcSquare ||\r\n\t\t\t e.target === calcTypeMaterial ){\r\n\t\t\tcountCalc(); \r\n\t\t}\r\n\t });\r\n}\r\n return total.value\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/gallery.js":
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gallery = (galleryItemClass, galeryCntClass, galleryFullClass) => {\r\n\tconst galleryItems = document.querySelectorAll(`.${galleryItemClass}`)\r\n\tconst galeryCnt = document.querySelector(`.${galeryCntClass}`)\r\n\tconst galleryFullImage = document.querySelector(`.${galleryFullClass}`)\r\n\r\n\tgalleryItems.forEach(e => {\r\n\t\te.addEventListener('click', event => {\r\n\t\t\tevent.preventDefault()\r\n\t\t\tlet item = event.target.closest(`.${galleryItemClass}`);\r\n\t\t\tif(event.target.closest(`.${galleryItemClass}`) == item){\r\n\t\t\t\tgalleryFullImage.src = item.getAttribute('href')\r\n\t\t\t\tgaleryCnt.classList.add('active')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\tif(galeryCnt){\r\n\t\tgaleryCnt.addEventListener('click', e => {\r\n\t\t\tif(!e.target.closest(`.${galleryFullClass}`)){\r\n\t\t\t\tgaleryCnt.classList.remove('active')\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/gallery.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\tlet start = performance.now();\r\n\r\n\trequestAnimationFrame(function animate(time) {\r\n\t\tlet timeFraction = (time - start) / duration;\r\n\t\tif (timeFraction > 1) timeFraction = 1;\r\n\r\n\t\tlet progress = timing(timeFraction);\r\n\r\n\t\tdraw(progress);\r\n\r\n\t\tif(timeFraction < 1) requestAnimationFrame(animate)\r\n\t});\r\n}\r\n\r\n\n\n//# sourceURL=webpack://diplom-middle/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = (btnClass, popupClass, popupClose, overlayClass) => {\r\n\tconst buttons = document.querySelectorAll(`.${btnClass}`);\r\n\tconst modal = document.querySelector(`.${popupClass}`);\r\n\tconst overlay = document.querySelector(`.${overlayClass}`);\r\n\tconst windowInnerWidth = window.innerWidth;\r\n\r\n\tbuttons.forEach(e => {\r\n\t\te.addEventListener('click', ()=>{\r\n\t\t\tif(windowInnerWidth > 768){\r\n\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t\toverlay.style.display = 'block';\r\n\t\t\t\t(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\t\t\t\t\tduration: 200,\r\n\t\t\t\t\ttiming(timeFraction) {\r\n\t\t\t\t\t\treturn timeFraction;\r\n\t\t\t\t\t},\r\n\t\t\t\t\tdraw(progress){\r\n\t\t\t\t\t\tmodal.style.opacity = progress\r\n\t\t\t\t\t\toverlay.style.opacity = progress\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t} else {\r\n\t\t\t\tmodal.style.display = 'block';\r\n\t\t\t\toverlay.style.display = 'block';\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\nwindow.addEventListener('click', e=>{\r\n\t\tif(e.target.classList.contains(popupClose) || \r\n\t\t\te.target.closest(`.${overlayClass}`)\r\n\t\t){\r\n\t\t\t\tmodal.style.display = 'none';\r\n\t\t\t\toverlay.style.display = 'none';\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({formId, someElement = []}) => {\r\n\tconst form = document.getElementById(formId);\r\n\tconst statusBlock = document.createElement('div')\r\n\tconst loader = document.querySelector(`.loader`);\r\n\r\n\tconst validate = (list) => {\r\n\t\tlet success = true;\r\n\r\n\t\tlist.forEach(input => {\r\n\t\t\tconsole.log(input);\r\n\t\t\t\r\n\t\t\tif(!input.classList.contains('success')){\r\n\t\t\t\tsuccess = false;\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t})\r\n\t\treturn success\r\n\t}\r\n\r\n\tconst sendData = (data) => {\r\n\t\treturn fetch('http://jsonplaceholder.typicode.com/posts', {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-type': 'application/json'\r\n\t\t\t}\r\n\t\t})\r\n\t\t.then(res => res.json())\r\n\t}\r\n\r\n\tconst submitForm = () => {\r\n\t\tconst formElements = form.querySelectorAll('input')\r\n\t\tconst formData = new FormData(form)\r\n\t\tconst formBody = {}\r\n\r\n\r\n\t\tformData.forEach((key, val) => {\r\n\t\t\tformBody[val] = key\r\n\t\t})\r\n\r\n\t\tsomeElement.forEach(e => {\r\n\t\t\tconst element = document.getElementById(e.id)\r\n\t\t\tif(e.type === 'block'){\r\n\t\t\t\tformBody[e.id] = element.textContent\r\n\t\t\t} \r\n\t\t\tif(e.type === 'input'){\r\n\t\t\t\tformBody[e.id] = element.value\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\tif(validate(formElements)){\r\n\r\n\t\t\tsendData(formBody)\r\n\t\t\t.then(data => {\r\n\t\t\t\tconsole.log(data);\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\tformElements.forEach(input => {\r\n\t\t\t\t\tinput.value = ''\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t\t.catch(error => {\r\n\t\t\t\r\n\t\t\t})\r\n\t\t} else {\r\n\t\t\talert('Данные не валидны!')\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n\ttry {\r\n\t\tif(!form){\r\n\t\t\tthrow new Error('Ошибка! Нет формы')\r\n\t\t}\r\n\t\tform.addEventListener('submit', e => {\r\n\t\t\te.preventDefault();\r\n\t\t\tsubmitForm()\r\n\t\t})\r\n\r\n\t} catch (error){\r\n\t\tconsole.log(error.message);\r\n\t\t\r\n\t}\r\n\r\n\t\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderContainer,slideItem,activeSlide,sliderBtns,arrowLeftId,arrowRightId, slidesQnty = 3) =>{\r\n\tconst sliderBlock = document.querySelector(`.${sliderContainer}`);\r\n\tconst slides = document.querySelectorAll(`.${slideItem}`);\r\n\tconst timeInterval = 2000;\r\n\tconst windowInnerWidth = window.innerWidth;\r\n\tlet startSlideQnty = slidesQnty;\r\n\tif(windowInnerWidth < 576){\r\n\t\tstartSlideQnty = 0;\r\n\t}\r\n\tconst classData = [\r\n\t\tsliderContainer,\r\n\t\tslideItem,\r\n\t\tactiveSlide,\r\n\t\tsliderBtns,\r\n\t\tarrowLeftId,\r\n\t\tarrowRightId\r\n\t]\r\n\r\n\tlet wrongClass = false;\r\n\tlet currentSlide = 0;\r\n\tlet interval;\r\n\r\n\r\n\tif (!document.querySelector(`.${classData[0]}`) ||\r\n\t !document.querySelector(`.${classData[1]}`)) {\r\n\t\twrongClass = true;\r\n\t} \r\n\tif(wrongClass){\r\n\t\treturn\r\n\t}\r\n\tif(!document.querySelector(`.${classData[1]}`).closest(`.${classData[0]}`)){\r\n\t\twrongClass = true;\r\n\t}\r\n\r\n\tif(wrongClass){\r\n\t\treturn\r\n\t}\r\n\r\n\r\n\r\n\tconst prevSlide = (elems, index, strClass) => {\r\n\t\tif(startSlideQnty == 3){\r\n\t\t\telems[index].classList.remove(strClass);\r\n\t\t\telems[index + 1].classList.remove(strClass);\r\n\t\t\telems[index + 2].classList.remove(strClass);\r\n\t\t} \r\n\t\tif(startSlideQnty == 2){\r\n\t\t\telems[index].classList.remove(strClass);\r\n\t\t\telems[index + 1].classList.remove(strClass);\r\n\t\t} else{\r\n\t\t\telems[index].classList.remove(strClass);\r\n\t\t}\r\n\t}\r\n\tconst nextSlide = (elems, index, strClass) => {\r\n\t\tif(startSlideQnty == 3){\r\n\t\t\telems[index].classList.add(strClass);\r\n\t\t\telems[index + 1].classList.add(strClass);\r\n\t\t\telems[index + 2].classList.add(strClass);\r\n\t\t}\r\n\t\tif(startSlideQnty == 2){\r\n\t\t\telems[index].classList.add(strClass);\r\n\t\t\telems[index + 1].classList.add(strClass);\r\n\t\t}else{\r\n\t\t\telems[index].classList.add(strClass);\r\n\t\t}\r\n\t}\r\n\r\n\tconst autoSlide = () => {\r\n\t\tprevSlide(slides, currentSlide, `${activeSlide}`)\r\n\t\tif(windowInnerWidth > 576){\r\n\t\t\tcurrentSlide = currentSlide + startSlideQnty\r\n\t\t} else {\r\n\t\t\tcurrentSlide = currentSlide + 1\r\n\t\t}\r\n\r\n\t\tif(currentSlide >= slides.length){\r\n\t\t\tcurrentSlide = 0\r\n\t\t}\r\n\t\tnextSlide(slides, currentSlide, `${activeSlide}`)\r\n\t}\r\n\r\n\tconst startSlide = (timer = 2000) => {\r\n\t\tautoSlide()\r\n\t\tinterval = setInterval(autoSlide, timer)\r\n\t}\r\n\r\n\tconst stopSlide = () => {\r\n\t\tclearInterval(interval)\r\n\t}\r\n\r\n\tsliderBlock.addEventListener('click', e => {\r\n\t\te.preventDefault();\r\n\t\t\r\n\t\tif(!e.target.closest(`#${arrowLeftId}`) && !e.target.closest(`#${arrowRightId}`)){\r\n\t\t\treturn\r\n\t\t}\r\n\r\n\t\tprevSlide(slides, currentSlide, `${activeSlide}`)\r\n\t\t\r\n\t\tif(e.target.closest(`#${arrowRightId}`)){\r\n\t\t\tif(windowInnerWidth > 768){\r\n\t\t\t\tcurrentSlide = currentSlide + startSlideQnty\r\n\t\t\t}else {\r\n\t\t\t\tcurrentSlide = currentSlide + 1\r\n\t\t\t}\r\n\t\t}\r\n\t\tif(e.target.closest(`#${arrowLeftId}`)){\r\n\t\t\tif(windowInnerWidth > 768){\r\n\t\t\t\tcurrentSlide = currentSlide - startSlideQnty\r\n\t\t\t}else {\r\n\t\t\t\tcurrentSlide = currentSlide - 1\r\n\t\t\t}\r\n\t\t}\r\n\t\tif(currentSlide >= slides.length){\r\n\t\t\tcurrentSlide = 0\r\n\t\t}\r\n\t\tif(currentSlide < 0){\r\n\t\t\tcurrentSlide = slides.length - 1\r\n\t\t}\r\n\t\tnextSlide(slides, currentSlide, `${activeSlide}`)\r\n\t})\r\n\r\n\tsliderBlock.addEventListener('mouseenter', e => {\r\n\t\tif(e.target.matches(`.${sliderBtns}`)){\r\n\t\t\tstopSlide();\r\n\t\t}\r\n\t}, true)\r\n\tsliderBlock.addEventListener('mouseleave', e => {\r\n\t\tif(e.target.matches(`.${sliderBtns}`)){\r\n\t\t\tstartSlide(timeInterval);\r\n\t\t}\r\n\t}, true)\r\n\r\n\tstartSlide(timeInterval)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = (elem) => {\r\n\tconst upBtn = document.querySelector(elem)\r\n\tupBtn.style.display = 'none';\r\n\r\n\twindow.addEventListener('scroll', function () {\r\n\t\tif(window.scrollY > 500){\r\n\t\t\tupBtn.style.display = 'inline-block';\r\n\t\t} else{\r\n\t\t\tupBtn.style.display = 'none';\r\n\t\t}\r\n\t});\r\n\t\r\n\tupBtn.addEventListener('click', event =>  {\r\n\t\tevent.preventDefault();\r\n\t\tconst blockID = upBtn.getAttribute('href').substr(1)\r\n\t\t\r\n\t\tdocument.getElementById(blockID).scrollIntoView({\r\n\t\t\tbehavior: 'smooth',\r\n\t\t\tblock: 'start'\r\n\t\t})\r\n\t})\r\n}\t\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine, timerCntSelector, daySelector, hourSelector,minuteSelector, secondSelector)=>{\r\n\tconst timerDays = document.querySelectorAll(`.${timerCntSelector} .${daySelector}`)\r\n\tconst timerHours = document.querySelectorAll(`.${timerCntSelector} .${hourSelector}`)\r\n\tconst timerMinutes = document.querySelectorAll(`.${timerCntSelector} .${minuteSelector}`)\r\n\tconst timerSeconds = document.querySelectorAll(`.${timerCntSelector} .${secondSelector}`)\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadLine).getTime();\r\n\t\tlet dateNow = new Date().getTime();\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet days = Math.floor((timeRemaining / 3600) / 24);\r\n\t\tlet hours = Math.floor((timeRemaining / 3600) % 24);\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\r\n\t\treturn {\r\n\t\t\ttimeRemaining,\r\n\t\t\tdays,\r\n\t\t\thours,\r\n\t\t\tminutes,\r\n\t\t\tseconds,\r\n\t\t}\r\n\t}\r\n\r\n\tconst updateClock = () =>{\r\n\t\tlet getTime = getTimeRemaining();\r\n\t\tif(getTime.timeRemaining < 0){\r\n\t\t\tstopTimer();\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\r\n\t\tchangeTextContent(timerDays, getTime.days)\r\n\t\tchangeTextContent(timerHours, getTime.hours)\r\n\t\tchangeTextContent(timerMinutes, getTime.minutes)\r\n\t\tchangeTextContent(timerSeconds, getTime.seconds)\r\n\t}\r\n\tconst changeTextContent = (item, timeItem) => {\r\n\t\titem.forEach(e => {\r\n\t\t\te.textContent = addZero(timeItem);\r\n\t\t})\r\n\t}\r\n\r\n\tconst clockInterval = setInterval(updateClock, 1000)\r\n\r\n\tconst stopTimer = () => {\r\n\t\t\tclearInterval(clockInterval)\r\n\t}\r\n\tconst addZero = (digit) => {\r\n\t\tif ((digit + '').length == 1){\r\n\t\t\treturn digit = '0' + digit;\r\n\t\t}\r\n\t\treturn digit\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\tconst allInputs = document.querySelectorAll('input');\r\n\tconst forms = document.querySelectorAll('form[id^=\"form\"]');\r\n\tconst testPhone = /^\\+?[0-9][-\\(]?\\d{3}\\)?-?\\d{3}-?\\d{2}-?\\d{2}$/;\r\n\tconst testName = /[а-яА-Яa-zA-Z\\\\s]+/;\r\n\r\n\tforms.forEach(e => {\r\n\t\tlet allInputs = document.querySelectorAll('input');\t\t\r\n\t\t\te.addEventListener('submit', event => {\r\n\t\t\t\tallInputs.forEach(e => {\r\n\t\t\t\t\tif(e.classList.contains('success')){\r\n\t\t\t\t\t\te.classList.remove('success')\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t\tlet inputTel = event.target.querySelector('input[name=\"phone\"]');\r\n\t\t\t\tlet inputName = event.target.querySelector('input[name=\"fio\"]');\r\n\t\t\t\tif(testPhone.test(inputTel.value)){\r\n\t\t\t\t\t\tinputTel.classList.add('success')\r\n\t\t\t\t} else{\r\n\t\t\t\t\tevent.preventDefault();\r\n\t\t\t\t\t\tinputTel.classList.add('error')\r\n\t\t\t\t}\r\n\t\t\t\tif(testName.test(inputName.value)){\r\n\t\t\t\t\t\tinputName.classList.add('success')\r\n\t\t\t\t} else{\r\n\t\t\t\t\tevent.preventDefault();\r\n\t\t\t\t\t\tinputName.classList.add('error')\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t})\r\n\r\n\t\tallInputs.forEach(e => {\r\n\t\t\t\te.addEventListener('focus', event => {\r\n\t\t\t\t\tif(event.target.classList.contains('error')){\r\n\t\t\t\t\t\tevent.target.classList.remove('error')\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\t})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://diplom-middle/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;