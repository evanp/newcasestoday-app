import { render, screen } from '@testing-library/react';
import NewCasesToday from './NewCasesToday';

test('New cases is an integer', () => {
  render(<NewCasesToday />);
  const newCasesElement = screen.queryByTestId('new-cases-today');
  expect(newCasesElement).toBeInTheDocument();
  const newCasesText = newCasesElement.textContent;
  expect(newCasesText).toMatch(/^\d+$/);
});
