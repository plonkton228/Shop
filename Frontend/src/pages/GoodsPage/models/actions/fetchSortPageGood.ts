import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Good } from 'entities/Good'
import { type ThunkConfig } from 'app/providers/Redux/models/types/ReduxType'
import { API } from 'share/api/api'
import { getSortGoods } from 'pages/GoodsPage/models/selectors/goodsPageSelector'

interface fetchSortPageGood {
    replace?: boolean
}
export const fetchSortPageGood = createAsyncThunk<Good[], fetchSortPageGood, ThunkConfig<string>>('gooods/fetchFisrtPage', async (arg, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const sort = getSortGoods(getState()) || 'panel'
    const api = new API()
    try {
        const data = await api.apiInstance.get<Good[]>('/goods', {
            params: {
                q: sort
            }
        })
        if (!data.data) {
            throw new Error()
        }
        return data.data
    } catch (e) {
        return rejectWithValue(e)
    }
})
