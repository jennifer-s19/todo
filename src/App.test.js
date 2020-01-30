import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders things to do link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ things to do/i);
  expect(linkElement).toBeInTheDocument();
});
