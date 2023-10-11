import { InputCustom, InputState } from 'share/ui/InputCustom/ui/InputCustom'
import { useCallback } from 'react'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { fetchGoods } from 'pages/GoodsPage/models/actions/fetchGoods'
import { getSearchGoods, setPage, setSearch } from 'pages/GoodsPage'
import { useSelector } from 'react-redux'
import cls from './SearchGoods.module.scss'
export const SearchGoods: React.FC = () => {
    const dispatch = useAppDispatch()
    const search = useSelector(getSearchGoods)
    const SearchChange = useCallback((e: string) => {
        dispatch(setSearch(e))
        dispatch(setPage(1))
        dispatch(fetchGoods({ replace: true }))
    }, [dispatch])
    return (<>
            <InputCustom classe={cls.InputSearch} value={search} onChange={SearchChange} placeholder={'Search...'} state={InputState.COMMENTINPUT}/>
    </>)
}
