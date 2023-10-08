import {createAsyncThunk} from "@reduxjs/toolkit";
import {Good, GoodSchema} from "entities/Good/models/types/GoodType";
import {ThunkConfig} from "app/providers/Redux/models/types/ReduxType";
import {api} from "share/api/api";

export const fetchGoodById = createAsyncThunk<Good, string, ThunkConfig<string>>('goood/fetch', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const data = await api.get(`/goods/${id}`)
        return data.data
    }
    catch (e) {
        return rejectWithValue(e)
    }
})
