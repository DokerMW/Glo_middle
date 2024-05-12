import { animate } from "./helpers";

const calc = () => {
 const calcBlock = document.getElementById('calc'); 
 const calcType = document.getElementById('calc-type'); 
 const calcTypeMaterial = document.getElementById('calc-type-material'); 
 const calcSquare = document.getElementById('calc-input'); 
 const total = document.getElementById('calc-total');

 const countCalc = () => {
	const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
	const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value || 1;
	calcSquare.value = calcSquare.value.replace(/[^\d]+/, "");
	const calcSquareValue = calcSquare.value;

	let totalValue = 0;

	if(!calcTypeValue){
		return
	}
	
	if(calcType.value && calcSquare.value){
		totalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue
		
		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress){
				total.value = Math.round(totalValue * progress) 
			}
		})
	} else {
		totalValue = 0;
	}
	
 }

if(calcBlock){
	calcBlock.addEventListener('change', e =>{
		if(e.target === calcType || e.target === calcSquare ||
			 e.target === calcTypeMaterial ){
			countCalc(); 
		}
	 });
}
 return total.value
}

export default calc