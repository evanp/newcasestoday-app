import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk))

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const newCasesElement = screen.queryByTestId('new-cases-today');
  expect(newCasesElement).toBeInTheDocument();
});


test('Last date is date-ish', () => {
  render(<Provider store={store}><App /></Provider>);
  const lastDate = screen.queryByTestId('last-date');
  expect(lastDate).toBeInTheDocument();
  const lastDateText = lastDate.textContent;
  expect(lastDateText).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});