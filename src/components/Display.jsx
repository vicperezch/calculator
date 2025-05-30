import './Display.css'

export default function Display({ previous, operator, current }) {
	return (
		<div className="display">
			<p className="operation">{ previous } { operator }</p>
			<p className="current-number">{ current }</p>
		</div>
	)
}
