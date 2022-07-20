import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../components/useCounter';

test("should increment the count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
        result.current.increment();
    }
    );
    expect(result.current.count).toBe(1);
});