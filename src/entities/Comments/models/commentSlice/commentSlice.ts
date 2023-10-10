import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import { type comment, type CommentSchema } from '../types/CommentSchema'
import { type GlobalScheme } from 'app/providers/Redux/models/types/ReduxType'
import { fetchGoodById } from 'entities/Good/models/actions/fetchGoodById'
import { fetchCommentById } from 'entities/Comments/models/actions/fetchCommentById'

const commentAdapter = createEntityAdapter<comment>({
    selectId: (comment) => comment.id
})

export const getComments = commentAdapter.getSelectors<GlobalScheme>((state) => state.comments || commentAdapter.getInitialState())

const commentSlice = createSlice({
    name: 'books',
    initialState: commentAdapter.getInitialState<CommentSchema>({
        ids: [],
        isLoading: false,
        error: '',
        entities: {
        }
    }),
    reducers: {
    },
    extraReducers: (builder) => (
        builder.addCase(fetchCommentById.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(fetchCommentById.fulfilled, (state, action) => {
            state.isLoading = false
            commentAdapter.setAll(state, action.payload)
        }),
        builder.addCase(fetchCommentById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error as string
        })

    )
})
export const commentReducer = commentSlice.reducer
