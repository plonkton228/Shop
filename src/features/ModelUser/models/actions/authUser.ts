import { createAsyncThunk } from '@reduxjs/toolkit'
import { ErrorAuth, ErrorsLog, type UserInfo } from '../types/AuthUserSchema'
import { type User } from 'entities/User/models/type/UserSchema'
import { AutoUser } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'share/const/localstorage'
import { API } from 'share/api/api'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { type Profile } from 'features/Profile/models/types/ProfileType'
import { validateErrorAuth } from '../actions/validateErrorAuth'
import { validateErrors } from 'features/ModelUser/models/actions/validateErrors'

export const authUser = createAsyncThunk<User | string, UserInfo, ThunkConfig<ErrorAuth | ErrorAuth[]>>('auth/user', async (userFiled, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi
    const api = new API().apiInstance
    const errors = validateErrorAuth(userFiled)
    if (errors.length > 0) {
        console.log(errors)
        return rejectWithValue(errors)
    }
    try {
        const data = await api.post<User>('users', { email: userFiled.email, password: userFiled.password, name: userFiled.name })
        const data2 = await api.post<Profile>('profile', { id: data.data.id, name: userFiled.name, lastname: userFiled.lastname })
        if (!data.data || !data2.data) {
            throw new Error()
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data.data))
        dispatch(AutoUser(data.data))
        userFiled.callback()
        return data.data
    } catch (error) {
        return rejectWithValue(ErrorAuth.ERROR_SERVER)
    }
})
