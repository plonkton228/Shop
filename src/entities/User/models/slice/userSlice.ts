import { type User, type UserScheme } from 'entities/User/models/type/UserSchema'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {USER_LOCALSTORAGE_KEY} from "share/const/localstorage";

const initialState: UserScheme = {
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        AutoUser (state, action: PayloadAction<User>) {
            state.authData = action.payload
        },
        reAuth (state) {
            const dataUser = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (dataUser) {
                state.authData = JSON.parse(dataUser)
            }
        },
        logout (state) {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            state.authData = undefined
        }
    }
})

export const { AutoUser, reAuth, logout } = userSlice.actions
export const userReducer = userSlice.reducer
