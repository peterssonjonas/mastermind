import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App text', () => {
  render(<App />);
  const textElement = screen.getByText(/App/i);
  expect(textElement).toBeInTheDocument();
});
