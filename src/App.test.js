import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const newCasesElement = screen.queryByTestId('new-cases-today');
  expect(newCasesElement).toBeInTheDocument();
});
