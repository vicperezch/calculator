export function evalExpression(a, b, operator) {
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

		case "%": {
			return a % b
		}
	}
}

export function isResultValid(result) {
	return (
		result.toString().length <= 9 &&
		result >= 0 &&
		!Number.isNaN(result) &&
		Number.isFinite(result)
	)
}

