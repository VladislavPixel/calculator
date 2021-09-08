import React,{useState} from 'react'
import Input from './components/input.jsx'
import Buttons from './components/buttons.jsx'
import {getQuantityDots} from './utils/determineTheNumberOfPoints.js'


function App(){
	const [stateInput, setValue] = useState("0") // State input
	const [stateBookkeeper, setStateBookkeeper] = useState(false) // State Bookkeeper
	const handlerClick = (valueElement) => {
		let bookkeeper = stateBookkeeper
		if(bookkeeper){
			setValue(valueElement)
			setStateBookkeeper(false)
		} else {
			const lastLetter = stateInput[stateInput.length - 1]
			const lengthState = stateInput.length
			let quantity
			let newValue
			if(valueElement === '0' && stateInput === '0'){
				setValue(valueElement)
			} else if(valueElement === '+' || valueElement === '-' || valueElement === '*' || valueElement === '/' || valueElement === '.'){
				if(lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/' || lastLetter === '.'){
					newValue = stateInput.slice(0, stateInput.length - 1) + valueElement
					setValue(newValue)
				} else {
					newValue = stateInput + valueElement
					quantity = getQuantityDots(newValue)
					if(quantity < 2){
						setValue(newValue)
					}
				}
			} else {
				if(stateInput === '0' && valueElement !== '0'){
					setValue(valueElement)
				} else if(lengthState > 2){
					const penult = stateInput[stateInput.length - 2]
					if(penult === '+' || penult === '-' || penult === '*' || penult === '/'){
						if(lastLetter === '0'){
							newValue = stateInput.slice(0, stateInput.length - 1) + valueElement
							setValue(newValue)
						} else {
							newValue = stateInput + valueElement
							setValue(newValue)
						}
					} else {
						setValue(stateInput + valueElement)
					}
				} else {
					setValue(stateInput + valueElement)
				}
			}
		}
	}
	const handleBookkeeper = () => {
		let stringExpression = stateInput
		let result = eval(stringExpression)
		if(result === Infinity){
			setValue('Деление на "0" невозможно!')
		} else {
			setValue(result)
		}
		setStateBookkeeper(true)
	}
	const handleReset = () => {
		setValue("0")
	}

	return(
		<div className="calculator">
			<Input stateInput = {stateInput} />
			<Buttons onHandClick = {handlerClick} onHandBookkeeper = {handleBookkeeper} onReset = {handleReset} />
		</div>
	)
}

export default App
