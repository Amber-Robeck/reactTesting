import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from './Person';

test('renders a greeting with name', () => {
    render(<Person name="Amber" />);
    const linkElement = screen.getByText(/Hi there Amber/i);
    expect(linkElement).toBeInTheDocument();
});