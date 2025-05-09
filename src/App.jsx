import './App.css'

function App() {
  return (
    <>
      <div className="calculator">
		<div className="display">
			<p className="operation">10 + 20</p>
			<p className="current-number">2780</p>
		</div>
		<div className="buttons">
			<button type="button" className="btn-clear">AC</button>
			<button type="button" className="btn-del">DEL</button>
			<button type="button" className="btn-x big-font">x</button>
			<button type="button" className="btn-num">7</button>
			<button type="button" className="btn-num">8</button>
			<button type="button" className="btn-num">9</button>
			<button type="button" className="btn-plus big-font">+</button>
			<button type="button" className="btn-num">4</button>
			<button type="button" className="btn-num">5</button>
			<button type="button" className="btn-num">6</button>
			<button type="button" className="btn-minus big-font">-</button>
			<button type="button" className="btn-num">1</button>
			<button type="button" className="btn-num">2</button>
			<button type="button" className="btn-num">3</button>
			<button type="button" className="btn-0">0</button>
			<button type="button" className="btn-eq big-font">=</button>
		</div>
      </div>
    </>
  )
}

export default App
