import NumberButton from '../components/NumberButton.jsx'

const meta = {
  component: NumberButton,
}

export default meta

export const Default = {
  args: {
	value: "9"
	},
  render: (args) => <NumberButton { ...args } />
}
