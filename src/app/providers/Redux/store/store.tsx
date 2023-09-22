import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../models/slices/counterSlice'

const Reducers = {
    counter: counterReducer
}
export const SetUpStore = () => {
    return configureStore({
        reducer: Reducers
    })
}
