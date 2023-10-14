import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type NameSchema } from '../types/NameType'
const initialState: NameSchema = {
    name: ''
}

export const nameSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setName (state, action: PayloadAction<string>) {
            state.name = action.payload
        }
    }
})

export const { setName } = nameSlice.actions
export const nameReducer = nameSlice.reducer
