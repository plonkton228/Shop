import { type EmailSchema } from 'entities/EmailUser/models/type/EmailUserType'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: EmailSchema = {
    email: '',
    error: ''
}

const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        setEmail (state, action: PayloadAction<string>) {
            state.email = action.payload
        }
    }
})
export const { setEmail } = emailSlice.actions
export const reducerEmail = emailSlice.reducer
