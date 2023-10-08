import { type AuthUserSchema, type ErrorsAuth } from 'features/ModelLogin/models/types/AuthUserSchema'
import { createSlice } from '@reduxjs/toolkit'
import { authUser } from 'features/ModelLogin/models/actions/authUser'

const initialState: AuthUserSchema = {
    isLoading: false,
    error: undefined
}

const AuthUserSlice = createSlice({
    name: 'AuthUser',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authUser.fulfilled, (state) => {
            state.isLoading = false
            state.error = undefined
        })
        builder.addCase(authUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as ErrorsAuth[]
        })
    }
})

export const AuthReducer = AuthUserSlice.reducer
