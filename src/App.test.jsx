import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App.jsx'

describe("Display constraints", () => {
	it('should not allow more than 9 digits on display', async () => {
    	render(<App />)
	
    	const user = userEvent.setup()
    	const buttonOne = screen.getByRole('button', { name: '1' })
	
	    for (let i = 0; i < 12; i++) {
	      await user.click(buttonOne)
	    }
	
	    const display = screen.getByText((_, element) =>
	      element?.classList.contains('current-number')
	    )	

    	expect(display.textContent.length).toEqual(9)
	})
})

describe("Calculator chained operations", () => {
	it("should compute a chain of operations correctly: 2 + 3 x 4 - 5 =", async () => {
		render(<App />)
    	const user = userEvent.setup()

    	const click = async (label) => {
      	const btn = screen.getByRole('button', { name: label })
      	await user.click(btn)
    	}

    	await click('2')
    	await click('+')
    	await click('3')
    	await click('x')
    	await click('4')
    	await click('-')
    	await click('5')
    	await click('=')

    	const display = screen.getByText((_, el) =>
      	el?.classList.contains('current-number')
    	)

    	expect(display.textContent).toBe('15')
	})
})
