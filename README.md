# React Calculator
A simple calculator built with React + Vite that supports basic arithmetic operations. It is fully tested with Vitest and React Testing Library, as well as Storybook.

## Features
- **Basic arithmetic:** Addition, subtraction, multiplication, division and modulo.
- **Input:** Supports decimal and negative numbers.
- **Restrictions:** Limits input and output to a maximum of 9 digits.
- **Testing:** It uses Vitest, React Testing Library and Storybook to test the application.
- **JS standard compliant:** Implements a linting script that disallows semicolons.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vicperezch/calculator.git
   cd calculator
   ```

2. **Install dependencies:**

   With Bun installed, run:

   ```bash
   bun install
   ```

## Usage

### Running the App

To start the development server, run:

```bash
bun run dev
```

This will launch the app in development mode. Open [http://localhost:5137](http://localhost:5173) in your browser to see the calculator.

## Custom scripts

This project implements scripts for testing and linting.

### Running Tests

To run all tests, execute:

```bash
bun run test
```

### Storybook

To run storybook, execute:
```bash
bun run storybook
```

### Linting

To check all files, run:

```bash
bun run lint
```
