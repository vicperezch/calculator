import './NumberButton.css'

export default function NumberButton( { value, onClickFunc } ) {
	return (
		<button type="button" className="btn-num" onClick={ () => onClickFunc(value) }>
			{ value }
		</button>
	)
}
