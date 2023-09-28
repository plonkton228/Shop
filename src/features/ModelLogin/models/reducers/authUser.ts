import { createAsyncThunk } from '@reduxjs/toolkit'
import { type UserInfo } from 'features/ModelLogin/models/types'
import axios from 'axios'
import { type User } from 'entities/User/models/type/UserType'
import { AutoUser } from 'entities/User'

export const authUser = createAsyncThunk<User, UserInfo>('', async (arg, thunkAPI): Promise<User> => {
    try {
        const data = await axios.post<User>('#')
        thunkAPI.dispatch(AutoUser(data.data))
        return data.data
    } catch (error) {
        return error
    }
})
