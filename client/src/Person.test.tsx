import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from './Person';

//Test 1: renders the component with name
test('renders a greeting with name', () => {
    render(<Person name="Amber" />);
    const linkElement = screen.getByText(/Hi there Amber/i);
    expect(linkElement).toBeInTheDocument();
});

//Test 2: renders the component with name by role
test('renders a greeting with name take two', () => {
    render(<Person name="Amber" />);
    const divElement = screen.getByRole("nameinfo");
    expect(divElement).toHaveTextContent("Hi there Amber");
});