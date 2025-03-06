import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../slices/counterSlice'

function CounterApp() {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default CounterApp