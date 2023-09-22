import { createSlice } from '@reduxjs/toolkit'
import { type CounterState } from '../types/ReduxType'
const initialState: CounterState = {
    value: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment (state) {
            state.value += 1
        },
        decrement (state) {
            state.value -= 1
        }

    }
})
const counterReducer = counterSlice.reducer
export const { increment, decrement } = counterSlice.actions

export default counterReducer
