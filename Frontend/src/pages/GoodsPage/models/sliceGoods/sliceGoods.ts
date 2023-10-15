import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import { type GoodsPageSchema } from '../types/GoodsPageSchema'
import { type GlobalScheme } from 'app/providers/Redux/models/types/ReduxType'
import { type Good } from 'entities/Good'
import { fetchGoods } from '../actions/fetchGoods'
import { type PayloadAction } from '@reduxjs/toolkit/dist/createAction'
import { fetchSortPageGood } from 'pages/GoodsPage/models/actions/fetchSortPageGood'

const goodsAdapter = createEntityAdapter<Good>({
    selectId: (comment) => comment.id
})

export const getGoods = goodsAdapter.getSelectors<GlobalScheme>((state) => state.goodsPage || goodsAdapter.getInitialState())

const commentSlice = createSlice({
    name: 'books',
    initialState: goodsAdapter.getInitialState<GoodsPageSchema>({
        ids: [],
        isLoading: false,
        error: undefined,
        entities: {
        },
        page: 1,
        limit: 6,
        hasMore: true
    }),
    reducers: {
        setPage (state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setSearch (state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setSort (state, action: PayloadAction<string>) {
            state.sort = action.payload
        }
    },
    extraReducers: (builder) => (
        builder.addCase(fetchGoods.pending, (state, action) => {
            state.isLoading = true
            if (action.meta.arg.replace) {
                goodsAdapter.removeAll(state)
            }
        }),
        builder.addCase(fetchGoods.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasMore = action.payload.length > 0
            if (action.meta.arg.replace) {
                goodsAdapter.setAll(state, action.payload)
            } else {
                goodsAdapter.addMany(state, action.payload)
            }

        }),
        builder.addCase(fetchGoods.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error as string
        }),

        builder.addCase(fetchSortPageGood.pending, (state, action) => {
            state.isLoading = true
            goodsAdapter.removeAll(state)
        }),
        builder.addCase(fetchSortPageGood.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            if (action.meta.arg.replace) {
                goodsAdapter.setAll(state, action.payload)
            }
            goodsAdapter.addMany(state, action.payload)

        }),
        builder.addCase(fetchSortPageGood.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error as string
        })

    )
})
export const goodsPageReducer = commentSlice.reducer
export const { setPage, setSearch, setSort } = commentSlice.actions
