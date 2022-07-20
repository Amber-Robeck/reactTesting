import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, decrement, increment } from '../store/store';

export function ReduxCounter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button aria-label='Increment value' onClick={() => dispatch(increment())}>+</button>
            <span role="reduxCounter">Count: {count}</span>
            <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
};