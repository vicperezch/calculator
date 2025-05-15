import { useReducer } from 'react'
import displayReducer from './reducers/displayReducer.js'
import './App.css'

function App() {
	const [display, dispatch] = useReducer(displayReducer, "0")

	function handleNumberButton(num) {
		dispatch({
			type: "numberButton",
			pressed: num
		})
	}

  return (
    <>
      <div className="calculator">
		<div className="display">
			<p className="operation">10 + 20</p>
			<p className="current-number">{ display }</p>
		</div>
		<div className="buttons">
			<button type="button" className="btn-clear">AC</button>
			<button type="button" className="btn-del">DEL</button>
			<button type="button" className="btn-x big-font">x</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("7")}>7</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("8")}>8</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("9")}>9</button>
			<button type="button" className="btn-plus big-font">+</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("4")}>4</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("5")}>5</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("6")}>6</button>
			<button type="button" className="btn-minus big-font">-</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("1")}>1</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("2")}>2</button>
			<button type="button" className="btn-num" onClick={() => handleNumberButton("3")}>3</button>
			<button type="button" className="btn-0" onClick={() => handleNumberButton("0")}>0</button>
			<button type="button" className="btn-eq big-font">=</button>
		</div>
      </div>
    </>
  )
}

export default App
