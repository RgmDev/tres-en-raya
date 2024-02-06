import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Nuevo juego" button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Nuevo juego/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders "Ir al inicio del juego" button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Ir al inicio del juego/i);
  expect(buttonElement).toBeInTheDocument();
});
