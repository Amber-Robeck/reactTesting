import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from '../components/Navigation';

test('renders navigation elements with name and href', () => {
    const items = [
        { name: 'Home', url: '/' },
    ];
    render(<Navigation items={items} />);
    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href", items[0].url);
});