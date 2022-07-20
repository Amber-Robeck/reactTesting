import React from 'react';
//https://mswjs.io/docs/getting-started/install
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { ApiCall } from '../components/ApiCall';

test('Shows loading if !isMounted', () => {
    render(<ApiCall />);
    const dataNotThere = screen.getByRole("notLoaded");
    expect(dataNotThere).toHaveTextContent("Loading...");
});

const server = setupServer(
    rest.get('/api', (req, res, ctx) => {
        return res(ctx.json({ name: 'Amber' }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Shows data if isMounted', async () => {
    render(<ApiCall />);
    const dataThere = await waitFor(() => screen.getByRole("loaded"));
    expect(dataThere).toHaveTextContent("Amber");
});