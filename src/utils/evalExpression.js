function evalExpression(a, b, operator) {
	switch (operator) {
		case "+": {
			return parseInt(a) + parseInt(b)
		}

		case "-": {
			return parseInt(a) - parseInt(b)
		}

		case "*": {
			return parseInt(a) * parseInt(b)
		}

		default:
			console.log("break")
			break;
	}
}

export default evalExpression
