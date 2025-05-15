import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, describe, it, expect } from 'vitest'
import App from './App.jsx'

test('Should not allow more than 9 digits on display', async () => {
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

