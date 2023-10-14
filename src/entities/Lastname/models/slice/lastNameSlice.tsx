import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LastNameSchema } from '../types/LastNameTypes'
const initialState: LastNameSchema = {
    lastname: ''
}

export const lastNameSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setLastName (state, action: PayloadAction<string>) {
            state.lastname = action.payload
        }
    }
})

export const { setLastName } = lastNameSlice.actions
export const lastNameReducer = lastNameSlice.reducer
