//from https://redux-toolkit.js.org/usage/usage-with-typescript

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface CounterState {
    value: number
};

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const createStore = () =>
    configureStore({
        reducer: {
            counter: counterSlice.reducer,
        }
    })

export const store = createStore();
// Other code such as selectors can use the imported `RootState` type
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default counterSlice.reducer