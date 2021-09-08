import React,{useState} from 'react'

const Buttons = ({onHandClick, onHandBookkeeper, onReset}) => {
	const defoltObject = [
		["operators", ["+", "-", "*", "/"]],
		["leftPanel", [["7", "8", "9"], ["4", "5", "6"], ["1", "2", "3"], ["0", ".", "AC"]]],
		["equal", "="]
	]
	const [stateButtons] = useState(defoltObject)
	return(
		<div className="buttons">
			{stateButtons.map((panel, index, array) => {
				if(index === 0){
					return(
						<div key = {panel[0]} className = {panel[0]}>
							{panel[1].map((item, index, array) => {
								return <div key = {item} onClick = {() => {
									onHandClick(item)
								}}>{item}</div>
							})}
						</div>
					)
				}
				if(index === 1){
					return(
						<div key = {panel[0]} className = {panel[0]}>
							{panel[1].map((arrayNumbers, ind, arr) => {
								return(
									<div key = {ind} className = "numbers">
										{arrayNumbers.map((num, i, array) => {
											if(num === "AC"){
												return <div key = {num} onClick = {onReset}>{num}</div>
											}
											return <div key = {num} onClick = {() => {
												onHandClick(num)
											}}>{num}</div>
										})}
									</div>
								)
							})}
						</div>
					)
				}
				if(index === 2){
					return <div onClick = {onHandBookkeeper} key = {panel[0]} className = {panel[0]}>{panel[1]}</div>
				}
				return null
			})}
		</div>
	)
}

export default Buttons