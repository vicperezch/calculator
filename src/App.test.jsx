import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App.jsx'

const clickBtn = async (user, label) => {
	const btn = screen.getByRole('button', { name: label })
    await user.click(btn)
}

describe("Display constraints", () => {
	it("should not allow more than 9 digits on display", async () => {
    	render(<App />)
    	const user = userEvent.setup()
	
	    for (let i = 0; i < 12; i++) {
	    	await clickBtn(user, "1")
	    }
	
	    const display = screen.getByText((_, element) =>
	    	element?.classList.contains("current-number")
	    )	

    	expect(display.textContent.length).toEqual(9)
	})

	it("should not delete when screen shows error", async () => {
		render(<App />)
		const user = userEvent.setup()

    	await clickBtn(user, "8")
    	await clickBtn(user, "/")
    	await clickBtn(user, "0")
    	await clickBtn(user, "=")

    	const display = screen.getByText((_, el) =>
      		el?.classList.contains("current-number")
    	)

    	expect(display.textContent).toBe("ERROR")

    	await clickBtn(user, "DEL")
    	expect(display.textContent).toBe("ERROR")

    	await clickBtn(user, "5")
    	await clickBtn(user, "+")
    	await clickBtn(user, "2")
    	await clickBtn(user, "=")

    	expect(display.textContent).toBe("7")
	})
})

describe("Calculator operations", () => {
	it("should compute a chain of operations correctly: 2 + 3 x 4 - 5 =", async () => {
		render(<App />)
    	const user = userEvent.setup()

    	await clickBtn(user, "2")
    	await clickBtn(user, "+")
    	await clickBtn(user, "3")
    	await clickBtn(user, "x")
    	await clickBtn(user, "4")
    	await clickBtn(user, "-")
    	await clickBtn(user, "5")
    	await clickBtn(user, "=")

    	const display = screen.getByText((_, el) =>
      		el?.classList.contains("current-number")
    	)

    	expect(display.textContent).toBe("15")
	})

	it("should handle division by zero", async () => {
		render(<App />)
		const user = userEvent.setup()

		await clickBtn(user, "8")
		await clickBtn(user, "/")
		await clickBtn(user, "0")
		await clickBtn(user, "=")

		const display = screen.getByText((_, el) => el?.classList.contains("current-number"))

		expect(display.textContent).toBe("ERROR")
	})
})
