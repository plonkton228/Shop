import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from 'features/Profile/models/actions/fetchProfile'
import { type ErrorsProfile, type Profile, type ProfileSchema } from 'features/Profile/models/types/ProfileType'
import { type PayloadAction } from '@reduxjs/toolkit/dist/createAction'
import { updateProfile } from 'features/Profile/models/actions/updateProfile'

const initialState: ProfileSchema = {
    isLoading: undefined,
    errors: undefined,
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
            state.errors = action.payload as ErrorsProfile[]
        })

        builder.addCase(updateProfile.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.form = action.payload
            state.readonly = true
            state.errors = undefined
        })
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload as ErrorsProfile[]
        })
    }
})

export const profileReducer = ProfileSlice.reducer
export const { setReadonly, setInfo, cancelEdit } = ProfileSlice.actions
