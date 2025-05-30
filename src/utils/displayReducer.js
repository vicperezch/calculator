import { evalExpression, isResultValid } from "./expressions.js"

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
			if (!isResultValid(result)) return { operator: "", display: "ERROR", previousOperand: "" }

			return { operator: pressed, display: "0", previousOperand: result.toString() }
		}

		case "eq": {
			if (!state.previousOperand || !state.operator || state.display === "ERROR") return { ...state }

			const result = evalExpression(parseFloat(state.previousOperand), parseFloat(state.display), state.operator)
			if (!isResultValid(result)) return { operator: "", display: "ERROR", previousOperand: "" }

			return { operator: "", display: result.toString(), previousOperand: result.toString() }
		}

		case "sign": {
			if (state.display === "ERROR" || state.display.length === 9) return { ...state }

			return { ...state, display: (parseFloat(state.display) * -1).toString()}
		}

		case "decimal": {
			if (state.display.includes(".") || state.display.length >= 8) return { ...state }

			return {...state, display: state.display + "." }
		}

		case "clear": {
			return { operator: "", display: "0", previousOperand: "" }
		}

		case "del": {
			if (state.display === "ERROR") return { ...state }
			if (state.display.length === 1) return { ...state, display: "0" }
			if (parseFloat(state.display) < 0 && state.display.length === 2) return { ...state, display: "0" }

			return { ...state, display: state.display.slice(0, -1) }
		}

		default: {
			return { ...state }
		}
	}
}

export default displayReducer
