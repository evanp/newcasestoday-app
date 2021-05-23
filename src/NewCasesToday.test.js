import { render, screen } from '@testing-library/react';
import NewCasesToday from './NewCasesToday';

test('New cases is an integer', () => {
  render(<NewCasesToday newCases="0" delta="1" />);
  const newCasesElement = screen.queryByTestId('new-cases-today');
  expect(newCasesElement).toBeInTheDocument();
  const newCasesText = newCasesElement.textContent;
  expect(newCasesText).toMatch(/^\+\d+$/);
});

test('Delta is an integer', () => {
    render(<NewCasesToday newCases="0" delta="1" />);
    const delta = screen.queryByTestId('delta');
    expect(delta).toBeInTheDocument();
    const deltaText = delta.textContent;
    expect(deltaText).toMatch(/^[+-]\d+$/);
});