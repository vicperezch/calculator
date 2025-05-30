import Display from '../components/Display.jsx'

const meta = {
  component: Display,
}

export default meta

export const Default = {
  args: {
		previous: "",
		operator: "",
		current: "0",
	},
  render: (args) => <Display { ...args } />
}

export const Operation = {
  args: {
		previous: "89",
		operator: "+",
		current: "1023",
	},
  render: (args) => <Display { ...args } />
}
