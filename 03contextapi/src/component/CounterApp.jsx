import React from 'react'
import { useCounter } from '../context/CounterContext'

function CounterApp() {
    const {count, increment, decrement } = useCounter()
    function plus () {
        increment()
    }
    function minus () {
        decrement()
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default CounterApp