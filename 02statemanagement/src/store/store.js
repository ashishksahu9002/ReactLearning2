import {configureStore} from '@reduxjs/toolkit'
import counterReduucer from '../slices/counterSlice'

export const store = configureStore({
    reducer: counterReduucer
})