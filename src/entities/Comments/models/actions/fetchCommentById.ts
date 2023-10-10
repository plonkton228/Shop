import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { api } from 'share/api/api'
import { type comment } from 'entities/Comments/models/types/CommentSchema'

export const fetchCommentById = createAsyncThunk<comment[], string, ThunkConfig<string>>('fetchByid/comment', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const data = await api.get<comment[]>('/comments', {
            params: {
                goodsId: id,
                _expand: 'user'
            }

        })
        if (!data.data) {
            throw new Error()
        }
        return data.data
    } catch (e) {
        return rejectWithValue('Something went wrong')
    }

})
