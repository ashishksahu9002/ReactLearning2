import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    function decreaseVal () {
        setCounter(counter-1)
    }
    
    function increaseVal () {
        setCounter(counter+1)
    }

    return (
        <div>
            <button onClick={decreaseVal}> - </button>
            <h1>Counter: {counter}</h1>
            <button onClick={increaseVal}> + </button>
        </div>
    )
}

export default Counter