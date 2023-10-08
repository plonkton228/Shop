import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import {GoodItem} from "entities/Good/ui/GoodItem";
import {DynamicProvider} from "share/libs/DynamicRedux/DynamicProvider";
import {getStateGood, goodReducer} from "entities/Good";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Skeleton} from "share/ui/Skeleton";

const DetailGoods: React.FC = () => {
    const { t } = useTranslation('goods')
    const id = useParams<{ id: string }>()
    const data = useSelector(getStateGood)
    return (<>
        <DynamicProvider DynamicReducers={{ goods: goodReducer }}>
            {
                data ? <GoodItem id={id.id}/> : <Skeleton height={400} width={400} border={20}/>
            }
        </DynamicProvider>
        </>)
}
export default memo(DetailGoods)
