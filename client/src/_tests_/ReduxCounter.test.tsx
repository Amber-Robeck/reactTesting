import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReduxCounter } from '../components/ReduxCounter';
import { Provider } from 'react-redux';
import { createStore } from '../store/store';

test("increment", () => {
    render(<Provider store={createStore()}><ReduxCounter /></Provider>);
    const counter = screen.getByRole("reduxCounter");
    expect(counter).toHaveTextContent("Count: 0");
    const button = screen.getByText("+");
    fireEvent.click(button);
    expect(counter).toHaveTextContent("Count: 1");
});

//when using store instead of createStore the count increments and this test fails
test("increment again", () => {
    render(<Provider store={createStore()}><ReduxCounter /></Provider>);
    const counter = screen.getByRole("reduxCounter");
    expect(counter).toHaveTextContent("Count: 0");
    const button = screen.getByText("+");
    fireEvent.click(button);
    expect(counter).toHaveTextContent("Count: 1");
});
