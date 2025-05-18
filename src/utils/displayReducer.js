import evalExpression from "./evalExpression.js"

function displayReducer(state, { type, pressed }) {
	switch (type) {
		case "numberButton": {
			if (state.display.length === 9) return { ...state }
			if (state.display === "0" || state.display === "ERROR") return { ...state, display: pressed }

			return { ...state, display: state.display + pressed }
		}

		case "operation": {
			if (state.display === "ERROR") return { ...state }
			if (!state.operator) return { display: "0", operator: pressed, previousOperand: state.display }

			const result = evalExpression(parseFloat(state.previousOperand), parseFloat(state.display), state.operator)
			if (result.toString().length > 9 || result < 0) return { operator: "", display: "ERROR", previousOperand: "" } 

			return { operator: pressed, display: "0", previousOperand: result.toString() }
		}

		case "eq": {
			if (!state.previousOperand || !state.operator || state.display === "ERROR") return { ...state }

			const result = evalExpression(parseFloat(state.previousOperand), parseFloat(state.display), state.operator)
			if (Number.isInteger(result) && result.toString().length > 9) return { operator: "", display: "ERROR", previousOperand: "" }
			if (result < 0) return { operator: "", display: "ERROR", previousOperand: "" }

			return { operator: "", display: result.toString().slice(0, 9), previousOperand: result.toString().slice(0, 9) }
		}

		case "clear": {
			return { operator: "", display: "0", previousOperand: "" }
		}

		case "del": {
			if (state.display.length === 1) return { ...state, display: "0" }

			return { ...state, display: state.display.slice(0, -1) }
		}

		default: {
			return { ...state }
		}
	}
}

export default displayReducer
