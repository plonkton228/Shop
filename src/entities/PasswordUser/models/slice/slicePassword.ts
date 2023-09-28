import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type PasswordScheme } from 'entities/PasswordUser/models/type/PasswordScheme'
const initialState: PasswordScheme = {
    password: ''
}
const slicePassword = createSlice({
    initialState,
    name: 'PasswordSlice',
    reducers: {
        setPassword (state, action: PayloadAction<string>) {
            state.password = action.payload
        }
    }
})
export const { setPassword } = slicePassword.actions
export const reducerPassword = slicePassword.reducer
