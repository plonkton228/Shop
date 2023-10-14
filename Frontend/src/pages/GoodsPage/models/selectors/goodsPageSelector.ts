import { type GlobalScheme } from 'app/providers/Redux/models/types/ReduxType'
import { createSelector } from '@reduxjs/toolkit'
import { type GoodsPageSchema } from 'pages/GoodsPage'

export const getStateGoodPage = (state: GlobalScheme) => state.goodsPage
export const getGoodsPage = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state?.goods)
export const getLoadingGoodsPage = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state?.isLoading)
export const getErrorGoodsPage = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state?.error)
export const getPageGoods = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state.page)
export const getLimitGoods = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state?.limit)
export const getHasMoreGoods = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state.hasMore)
export const getSearchGoods = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state?.search)
export const getSortGoods = createSelector(getStateGoodPage, (state: GoodsPageSchema) => state?.sort)
