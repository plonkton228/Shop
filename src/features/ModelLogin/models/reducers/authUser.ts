import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "features/ModelLogin/models/types";
import axios, {AxiosResponse} from "axios";

export const authUser = createAsyncThunk<User, User>('', async (arg, thunkAPI): User => {
    try {
        const data = await axios.post<User>('#')
        return data.data
    }
    catch (error) {
        return error
    }
})