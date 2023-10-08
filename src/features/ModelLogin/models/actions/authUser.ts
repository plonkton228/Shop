import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorsAuth, type UserInfo } from 'features/ModelLogin/models/types/AuthUserSchema'
import { type User } from 'entities/User/models/type/UserSchema'
import { AutoUser } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'share/const/localstorage'
import { api } from 'share/api/api'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { validateErrors } from 'features/ModelLogin/models/actions/validateErrors'

export const authUser = createAsyncThunk<User | string, UserInfo, ThunkConfig<ErrorsAuth | ErrorsAuth[]>>('', async (userFiled, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi
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
        return data.data
    } catch (error) {
        errors.push(ErrorsAuth.ERROR_SERVER)
        return rejectWithValue(errors)
    }
})
