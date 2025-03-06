import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CounterProvider} from './context/CounterContext'
import CounterApp from './component/CounterApp'

function App() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <CounterProvider value={{count, increment, decrement}}>
            <CounterApp />
        </CounterProvider>
    )
}

export default App
