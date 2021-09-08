function getQuantityDots(txt){
	let operator
	let repetition = 0
	mark: for(let i = txt.length - 1; i >= 0; i--){
		if(txt[i] === '+' || txt[i] === '-' || txt[i] === '*' || txt[i] === '/'){
			operator = txt[i]
			break mark
		}
	}
	const separatorArray = txt.split(operator)
	for(let m = 0; m < separatorArray[separatorArray.length - 1].length; m++){
		if(separatorArray[separatorArray.length - 1][m] === '.'){
			repetition++
		}
	}

	return repetition
}
export {getQuantityDots}


