import {memo, useCallback} from 'react'
import { Cart, CartListState } from 'share/ui/Cart'
import imgItem from '../models/imgs/ImageSale.png'
import { useTranslation } from 'react-i18next'
import cls from './GoodsListItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { PathRouts } from 'app/providers/Routing/lib/Store'

interface GoodsListItemProps {
    id: string
    model: string
    tolerance: string
    weight: string

}
export const GoodsListItem: React.FC<GoodsListItemProps> = memo((props: GoodsListItemProps) => {
    const {
        model,
        tolerance,
        weight,
        id,
    } = props
    const navigate = useNavigate()
    const NavigateClick = useCallback(() => {
        navigate(`${PathRouts.goods_detail}${id}`)
    },[])
    const { t } = useTranslation('goods')

    return (<>
        <div onClick={NavigateClick}>
            <Cart classe={cls.ListItemContainer} state={CartListState.SALECART}>
                <img src={imgItem}/>
                <h2>{t('MODEL')}: {t(model)}</h2>
                <div> <p>{t('Tolerance')}</p>  <p>{t(tolerance)}</p> </div>
                <div> <p>{t('Weight')}</p> <p>{t(weight)}</p></div>
            </Cart>
        </div>
        </>)
})
