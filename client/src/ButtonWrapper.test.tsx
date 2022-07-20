import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonWrapper } from './ButtonWrapper';

test('Handles onClick', () => {
    const handleClick = jest.fn();
    render(<ButtonWrapper onClick={handleClick} title="Sign in" />);
    const buttonElement = screen.getByText("Sign in");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});