import { createAsyncThunk } from '@reduxjs/toolkit'
import { type UserInfo } from 'features/ModelLogin/models/types/AuthUserSchema'
import axios from 'axios'
import { type User } from 'entities/User/models/type/UserSchema'
import { AutoUser } from 'entities/User'

export const authUser = createAsyncThunk<User | string, UserInfo>('', async (userFiled, thunkAPI): Promise<User | string> => {
    try {
        const data = await axios.post<User>('#')
        thunkAPI.dispatch(AutoUser(data.data))
        return data.data
    } catch (error) {
        return 'fggf'
    }
})
