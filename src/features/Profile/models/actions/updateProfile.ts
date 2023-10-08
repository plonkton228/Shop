import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorsProfile, type Profile } from 'features/Profile/models/types/ProfileType'
import { api } from 'share/api/api'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { validateError } from 'features/Profile/models/actions/validateError'

export const updateProfile = createAsyncThunk<Profile, Profile, ThunkConfig<ErrorsProfile[] | ErrorsProfile>>('update/Profile', async (Profile, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const errors = validateError(Profile)
    if (errors.length) {
        return rejectWithValue(errors)
    }
    try {
        const data = await api.put<Profile>('profile', Profile)
        return data.data
    } catch (e) {
        errors.push(ErrorsProfile.ERROR_SERVER)
        return rejectWithValue(errors)
    }
})
