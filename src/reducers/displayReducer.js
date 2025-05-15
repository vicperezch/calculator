function displayReducer(currentDisplay, action) {
	switch (action.type) {
		case "numberButton": {
			if (currentDisplay.length === 9) return currentDisplay
			if (currentDisplay === "0") return action.pressed

			return currentDisplay + action.pressed
		}
	}
}

export default displayReducer
