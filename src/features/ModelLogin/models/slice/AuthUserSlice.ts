import { type AuthUserShcnema } from 'features/ModelLogin/models/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { authUser } from 'features/ModelLogin/models/reducers/authUser'

const initialState: AuthUserShcnema = {
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
