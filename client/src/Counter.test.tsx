import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';

test('Handles count onClick', () => {
    render(<Counter />);

    const divElement = screen.getByRole("counter");
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("You clicked 1 times");
});