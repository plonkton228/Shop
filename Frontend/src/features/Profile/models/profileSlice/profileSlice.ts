import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from 'features/Profile/models/actions/fetchProfile'
import { type ErrorsEmailUpdate, type Profile, type ProfileSchema } from '../types/ProfileType'
import { type PayloadAction } from '@reduxjs/toolkit/dist/createAction'
import { updateEmail } from '../actions/updateEmail'

const initialState: ProfileSchema = {
    isLoading: undefined,
    errorsEmail: undefined,
    readonly: true,
    data: undefined
}

const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        setReadonly (state, action: PayloadAction<boolean>) {
            state.readonly = action.payload
        },
        setInfo (state, action: PayloadAction<Profile>) {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelEdit (state) {
            state.readonly = true
            state.form = state.data
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProfile.fulfilled, (state, action) => {

            state.isLoading = false
            state.data = action.payload
            state.form = action.payload
        })
        builder.addCase(fetchProfile.rejected, (state, action) => {
            state.isLoading = false
            state.errorsEmail = action.payload as ErrorsEmailUpdate[]
        })

        builder.addCase(updateEmail.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateEmail.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = {email: action.payload, ...state.data}
            state.form = {email: action.payload, ...state.data}
            state.readonly = true
            state.errorsEmail = undefined
        })
        builder.addCase(updateEmail.rejected, (state, action) => {
            state.isLoading = false
            state.errorsEmail = action.payload as ErrorsEmailUpdate[]
        })
    }
})

export const profileReducer = ProfileSlice.reducer
export const { setReadonly, setInfo, cancelEdit } = ProfileSlice.actions
