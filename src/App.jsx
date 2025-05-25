import { useReducer } from 'react'
import displayReducer from './utils/displayReducer.js'
import NumberButton from './components/NumberButton.jsx'
import './App.css'

function App() {
	const [state, dispatch] = useReducer(displayReducer, { display: "0", operator: "", previousOperand: "" })

	function handleNumberButton(num) {
		dispatch({
			type: "numberButton",
			pressed: num
		})
	};

	function handleOperation(op) {
		dispatch({
			type: "operation",
			pressed: op
		})
	}

	function handleEq() {
		dispatch({
			type: "eq"
		})
	}

	function handleClear() {
		dispatch({
			type: "clear"
		})
	}

	function handleDel() {
		dispatch({
			type: "del"
		})
	}

	function handleToggleSign() {
		dispatch({
			type: "sign"
		})
	}

	function handleDecimal() {
		dispatch({
			type: "decimal"
		})
	}

  return (
    <>
      <div className="calculator">
		<div className="display">
			<p className="operation">{ state.previousOperand } { state.operator }</p>
			<p className="current-number">{ state.display }</p>
		</div>
		<div className="buttons">
			<button type="button" className="btn-clear" onClick={ handleClear }>AC</button>
			<button type="button" className="btn-del" onClick={ handleDel }>DEL</button>
			<button type="button" className="btn-sign" onClick={ handleToggleSign }>+/-</button>
			<button type="button" className="btn-div big-font" onClick={() => handleOperation("/")}>/</button>
			<button type="button" className="btn-x big-font" onClick={() => handleOperation("*")}>x</button>
			<button type="button" className="btn-mod" onClick={() => handleOperation("%")}>%</button>
			<NumberButton value={ "7" } onClickFunc={ handleNumberButton }/>
			<NumberButton value={ "8" } onClickFunc={ handleNumberButton }/>
			<NumberButton value={ "9" } onClickFunc={ handleNumberButton }/>
			<button type="button" className="btn-plus big-font" onClick={() => handleOperation("+")}>+</button>
			<NumberButton value={ "4" } onClickFunc={ handleNumberButton }/>
			<NumberButton value={ "5" } onClickFunc={ handleNumberButton }/>
			<NumberButton value={ "6" } onClickFunc={ handleNumberButton }/>
			<button type="button" className="btn-minus big-font" onClick={() => handleOperation("-")}>-</button>
			<NumberButton value={ "1" } onClickFunc={ handleNumberButton }/>
			<NumberButton value={ "2" } onClickFunc={ handleNumberButton }/>
			<NumberButton value={ "3" } onClickFunc={ handleNumberButton }/>
			<button type="button" className="btn-0" onClick={() => handleNumberButton("0")}>0</button>
			<button type="button" className="btn-dec big-font" onClick={ handleDecimal }>.</button>
			<button type="button" className="btn-eq big-font" onClick={ handleEq }>=</button>
		</div>
      </div>
    </>
  )
}

export default App
