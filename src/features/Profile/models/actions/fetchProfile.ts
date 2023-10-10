import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'share/api/api'
import { ErrorsProfile, type Profile } from 'features/Profile/models/types/ProfileType'

export const fetchProfile = createAsyncThunk<Profile, string>('profile/fetchProfile', async (id, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi
    try {
        const data = await api.get<Profile>(`profile/${id}`)
        if (!data.data) {
            throw new Error()
        }
        return data.data
    } catch (e) {
        const error: ErrorsProfile[] = []
        error.push(ErrorsProfile.ERROR_SERVER)
        return rejectWithValue(error)
    }
})
