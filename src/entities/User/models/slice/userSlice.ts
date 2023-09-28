import { type User, type UserScheme } from 'entities/User/models/type/UserType'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: UserScheme = {
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        AutoUser (state, action: PayloadAction<User>) {
            state.authData = action.payload
        }
    }
})

export const { AutoUser } = userSlice.actions
export const userReducer = userSlice.reducer
