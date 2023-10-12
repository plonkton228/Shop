import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Good } from 'entities/Good/models/types/GoodType'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { API } from 'share/api/api'
import { getSearchGoods, setPage } from 'pages/GoodsPage'
import {
    getHasMoreGoods,
    getLimitGoods,
    getPageGoods,
    getSortGoods
} from 'pages/GoodsPage/models/selectors/goodsPageSelector'

interface fetchGoodsProps {
    replace?: boolean
}
export const fetchGoods = createAsyncThunk<Good[], fetchGoodsProps, ThunkConfig<string>>('goood/fetch', async (arg, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    const page = getPageGoods(getState())
    const limit = getLimitGoods(getState())
    const hasMore = getHasMoreGoods(getState())
    const search = getSearchGoods(getState())
    const api = new API().apiInstance
    try {
        const data = await api.get<Good[]>('/goods', {
            params: {
                _page: page,
                _limit: limit,
                q: search
            }
        })
        if (hasMore) {
            dispatch(setPage(page + 1))
        }

        if (!data.data) {
            throw new Error()
        }
        return data.data
    } catch (e) {
        return rejectWithValue(e)
    }
})
