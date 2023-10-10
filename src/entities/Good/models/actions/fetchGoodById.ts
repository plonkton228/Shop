import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Good } from 'entities/Good/models/types/GoodType'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { api } from 'share/api/api'

export const fetchGoodById = createAsyncThunk<Good, string, ThunkConfig<string>>('goood/fetch', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    console.log({ 'id': id })
    try {
        const data = await api.get<Good>(`/goods/${id}`)
        if (!data.data) {
            throw new Error()
        }
        return data.data
    } catch (e) {
        return rejectWithValue(e)
    }
})
