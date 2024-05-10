const timer = (deadLine, timerCntSelector, daySelector, hourSelector,minuteSelector, secondSelector)=>{
	const timerDays = document.querySelectorAll(`.${timerCntSelector} .${daySelector}`)
	const timerHours = document.querySelectorAll(`.${timerCntSelector} .${hourSelector}`)
	const timerMinutes = document.querySelectorAll(`.${timerCntSelector} .${minuteSelector}`)
	const timerSeconds = document.querySelectorAll(`.${timerCntSelector} .${secondSelector}`)

	const getTimeRemaining = () => {
		let dateStop = new Date(deadLine).getTime();
		let dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;
		let days = Math.floor((timeRemaining / 3600) / 24);
		let hours = Math.floor((timeRemaining / 3600) % 24);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let seconds = Math.floor(timeRemaining % 60);
	
		return {
			timeRemaining,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	const updateClock = () =>{
		let getTime = getTimeRemaining();
		if(getTime.timeRemaining < 0){
			stopTimer();
			return;
		}

		
		changeTextContent(timerDays, getTime.days)
		changeTextContent(timerHours, getTime.hours)
		changeTextContent(timerMinutes, getTime.minutes)
		changeTextContent(timerSeconds, getTime.seconds)
	}
	const changeTextContent = (item, timeItem) => {
		item.forEach(e => {
			e.textContent = addZero(timeItem);
		})
	}

	const clockInterval = setInterval(updateClock, 1000)

	const stopTimer = () => {
			clearInterval(clockInterval)
	}
	const addZero = (digit) => {
		if ((digit + '').length == 1){
			return digit = '0' + digit;
		}
		return digit
	}
}

export default timer