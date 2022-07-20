import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

//https://testing-library.com/docs/react-testing-library/intro/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
