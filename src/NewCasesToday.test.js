import { render, screen } from '@testing-library/react';
import NewCasesToday from './NewCasesToday';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk))

test('New cases is an integer', () => {
  render(<Provider store={store}><NewCasesToday /></Provider>);
  const newCasesElement = screen.queryByTestId('new-cases-today');
  expect(newCasesElement).toBeInTheDocument();
  const newCasesText = newCasesElement.textContent;
  expect(newCasesText).toMatch(/^\+\d+$/);
});

test('Last date is date-ish', () => {
    render(<Provider store={store}><NewCasesToday /></Provider>);
    const lastDate = screen.queryByTestId('last-date');
    expect(lastDate).toBeInTheDocument();
    const lastDateText = lastDate.textContent;
    expect(lastDateText).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

test('Delta is an integer', () => {
    render(<Provider store={store}><NewCasesToday /></Provider>);
    const delta = screen.queryByTestId('delta');
    expect(delta).toBeInTheDocument();
    const deltaText = delta.textContent;
    expect(deltaText).toMatch(/^[+-]\d+$/);
});