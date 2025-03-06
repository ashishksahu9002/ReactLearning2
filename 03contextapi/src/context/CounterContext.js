import {createContext, useContext} from 'react'

export const CounterContext = createContext({
    count : 0,
    increment: ()=> {},
    decrement: ()=> {}
})

export const useCounter = () => {
    return useContext(CounterContext)
}

export const CounterProvider = CounterContext.Provider