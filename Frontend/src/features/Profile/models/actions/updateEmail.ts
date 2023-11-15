import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorsEmailUpdate, type Profile } from '../types/ProfileType'
import { API } from 'share/api/api'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { validateError } from 'features/Profile/models/actions/validateError'

export const updateEmail = createAsyncThunk<string, string, ThunkConfig<ErrorsEmailUpdate[] | ErrorsEmailUpdate>>('update/Profile', async (email, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const api = new API().apiInstance
    const errors = validateError(email)
    if (errors.length) {
        return rejectWithValue(errors)
    }
    try {
        const data = await api.post<string>('accounts/email/change/', {email: email})
        return data.data
    } catch (e) {
        errors.push(ErrorsEmailUpdate.ERROR_SERVER)
        return rejectWithValue(errors)
    }
})
