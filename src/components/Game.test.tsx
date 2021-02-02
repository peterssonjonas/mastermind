import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders Mastermind text', () => {
  render(<Game />);
  const textElement = screen.getByText(/Mastermind/i);
  expect(textElement).toBeInTheDocument();
});
