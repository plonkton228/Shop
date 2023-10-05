import { type AuthUserSchema } from 'features/ModelLogin/models/types/AuthUserSchema'
import { createSlice } from '@reduxjs/toolkit'
import { authUser } from 'features/ModelLogin/models/actions/authUser'

const initialState: AuthUserSchema = {
    isLoading: false,
    error: ''
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
        })
        builder.addCase(authUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
    }
})

export const AuthReducer = AuthUserSlice.reducer
