function evalExpression(a, b, operator) {
	switch (operator) {
		case "+": {
			return a + b
		}

		case "-": {
			return a - b
		}

		case "*": {
			return a * b
		}

		case "/": {
			return a / b
		}

		default:
			break;
	}
}

export default evalExpression
