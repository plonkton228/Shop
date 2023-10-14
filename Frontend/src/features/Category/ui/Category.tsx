import cls from '../models/Category.module.scss'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { setSort } from 'pages/GoodsPage'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { fetchFirstPageGoods } from 'pages/GoodsPage/models/actions/fetchFirstPageGoods'

export const Category: React.FC = memo(() => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const clickPanel = useCallback(() => {
        dispatch(setSort('panel'))
        dispatch(fetchFirstPageGoods({ replace: true }))
    }, [dispatch])

    const clickKonektor = useCallback(() => {
        dispatch(setSort('konektor'))
        dispatch(fetchFirstPageGoods({ replace: true }))
    }, [dispatch])

    const clickKabel = useCallback(() => {
        dispatch(setSort('kabel'))
        dispatch(fetchFirstPageGoods({ replace: true }))
    }, [dispatch])

    const clickBatarie = useCallback(() => {
        dispatch(setSort('batarie'))
        dispatch(fetchFirstPageGoods({ replace: true }))
    }, [dispatch])

    const clickMaterial = useCallback(() => {
        dispatch(setSort('material'))
        dispatch(fetchFirstPageGoods({ replace: true }))
    }, [dispatch])

    const clickConverter = useCallback(() => {
        dispatch(setSort('converter'))
        dispatch(fetchFirstPageGoods({ replace: true }))
    }, [dispatch])

    return (<>
        <div className={cls.ContainerCategory} >
            <div className={cls.InnerCategory}>
                <ButtonCustom onClick={clickPanel} classes={cls.LintC} state={ButtonCustomState.RESET}>{t('solární panel')}</ButtonCustom>
                <ButtonCustom onClick={clickKabel} classes={cls.LintC} state={ButtonCustomState.RESET}>{t('Kabela')}</ButtonCustom>
                <ButtonCustom onClick={clickKonektor} classes={cls.LintC} state={ButtonCustomState.RESET}>{t('Konektor')}</ButtonCustom>
                <ButtonCustom onClick={clickConverter} classes={cls.LintC} state={ButtonCustomState.RESET}>{t('Měnič')}</ButtonCustom>
                <ButtonCustom onClick={clickBatarie} classes={cls.LintC} state={ButtonCustomState.RESET}>{t('Baterie')}</ButtonCustom>
                <ButtonCustom onClick={clickMaterial} classes={cls.LintC} state={ButtonCustomState.RESET}>{t('Montážní materiály')}</ButtonCustom>
            </div>
            <hr/>
        </div>
    </>)

})
