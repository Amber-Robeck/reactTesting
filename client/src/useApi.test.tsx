import React from 'react';
//https://mswjs.io/docs/getting-started/install
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor, renderHook, act } from '@testing-library/react';
import { useApi } from './useApi';

const server = setupServer(
    rest.get('/api', (req, res, ctx) => {
        return res(ctx.json({ name: 'Amber' }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Should return data", async () => {
    const { result } = renderHook(() => useApi());;
    await waitFor(() =>
        expect(result.current).toStrictEqual({ name: 'Amber' }));
});