import react, { useState } from 'react';

export const Counter: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p role="counter">You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};