import { createAsyncThunk } from '@reduxjs/toolkit'
import { type comment, type typeForActionAddComment } from '../types/CommentSchema'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { api } from 'share/api/api'
import { fetchCommentById } from '../actions/fetchCommentById'

export const createComment = createAsyncThunk<comment, typeForActionAddComment, ThunkConfig<string>>('create/comment', async (payload, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI
    try {
        const data = await api.post<comment>('comments', {
            goodsId: payload.goodsId,
            userId: payload.userId,
            body: payload.text
        })
        if (!data.data) {
            throw new Error()
        }
        dispatch(fetchCommentById(payload.goodsId))
        return data.data
    } catch (e) {
        return rejectWithValue(e)
    }
})
