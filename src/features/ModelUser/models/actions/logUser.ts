import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorsLog, type UserInfo } from '../types/AuthUserSchema'
import { type User } from 'entities/User/models/type/UserSchema'
import { AutoUser } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'share/const/localstorage'
import { API } from 'share/api/api'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { validateErrors } from './validateErrors'

export const logUser = createAsyncThunk<User | string, UserInfo, ThunkConfig<ErrorsLog | ErrorsLog[]>>('log/user', async (userFiled, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi
    const api = new API().apiInstance
    const errors = validateErrors(userFiled)
    if (errors.length) {
        return rejectWithValue(errors)
    }
    try {
        const data = await api.post<User>('login', userFiled)
        if (!data.data) {
            throw new Error()
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data.data))
        dispatch(AutoUser(data.data))
        userFiled.callback()
        return data.data
    } catch (error) {
        errors.push(ErrorsLog.ERROR_SERVER)
        return rejectWithValue(errors)
    }
})
