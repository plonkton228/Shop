import {createAsyncThunk} from '@reduxjs/toolkit'
import {type comment, ErrorsComment, type typeForActionAddComment} from '../types/CommentSchema'
import {type ThunkConfig} from 'app/providers/Redux/models/types/ReduxType'
import {API} from 'share/api/api'
import {fetchCommentById} from '../actions/fetchCommentById'
import {validateErrors} from '../actions/validateErrors'

export const createComment = createAsyncThunk<comment, typeForActionAddComment, ThunkConfig<ErrorsComment[] | ErrorsComment>>('create/comment', async (payload, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI
    const api = new API().apiInstance
    const errors: ErrorsComment[] = validateErrors(payload.text)
    if (errors.length) {
        return rejectWithValue(errors)
    }
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
        errors.push(ErrorsComment.SERVER_ERROR)
        return rejectWithValue(errors)
    }
})
