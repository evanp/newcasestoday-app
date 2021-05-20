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
