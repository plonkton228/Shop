import { useSelector } from 'react-redux'
import { getGoods, getLoadingGoodsPage } from 'pages/GoodsPage'
import { getHasMoreGoods } from 'pages/GoodsPage/models/selectors/goodsPageSelector'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { useCallback, useEffect } from 'react'
import { fetchGoods } from 'pages/GoodsPage/models/actions/fetchGoods'
import cls from 'pages/GoodsPage/ui/GoodsPage/GoodsPage.module.scss'
import { Skeleton, SkeletonState } from 'share/ui/Skeleton'
import { GoodsList } from 'entities/Good'
import { Page } from 'share/ui/Page/Page'
import {SearchGoods} from "pages/GoodsPage/ui/SearchGoods/ui/SearchGoods";


const GoodsPage: React.FC = () => {
    const arrGoods = useSelector(getGoods.selectAll)
    const isLoading = useSelector(getLoadingGoodsPage)
    const hasMore = useSelector(getHasMoreGoods)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchGoods({ replace: false }))
    }, [])

    const FetchNextItems = useCallback(() => {
        if (hasMore) {
            dispatch(fetchGoods({ replace: false }))
        }
    }, [dispatch, hasMore])
    const SkeletonsLoader = () => {
        return (<>
            <div className={cls.SkeletonGoodsContaier}>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
                <Skeleton state={SkeletonState.V2} height={'400px'} width={'400px'} border={'20px'}/>
            </div>
        </>)
    }
    return (<>
        <Page onScrollEnd={FetchNextItems}>
            <div className={cls.InputConatiner}><SearchGoods/></div>
            <GoodsList goods={arrGoods}/>
            {isLoading && <SkeletonsLoader/>}
        </Page>
    </>
    )
}
export default GoodsPage
