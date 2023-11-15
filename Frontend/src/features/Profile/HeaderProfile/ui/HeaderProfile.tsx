import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { useSelector } from 'react-redux/es/exports'
import { getReadOnly, updateEmail, cancelEdit } from '../../index'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { setReadonly } from 'features/Profile/models/profileSlice/profileSlice'
import cls from '../models/HeaderProfile.module.scss'
import { getUser } from 'entities/User/models/selectors/getUser/getUser'

interface HedaerProfileProps {
    email: string
    first_name: string
}
const HeaderProfile: React.FC<HedaerProfileProps> = memo((props: HedaerProfileProps) => {

    const { t } = useTranslation('profile')
    const readOnly = useSelector(getReadOnly)
    const dispatch = useAppDispatch()
    const user = useSelector(getUser)
    const {
        email,
        first_name
    } = props
    const onEdit = useCallback(() => {
        dispatch(setReadonly(false))
    }, [dispatch])
    const cancleEdit = useCallback(() => {
        dispatch(cancelEdit())
    }, [dispatch])

    const UpdateHandler = useCallback(() => {
        dispatch(updateEmail(email))
    }, [dispatch, email, first_name])

    return (<>
        {
            readOnly
                ? <ButtonCustom onClick={onEdit} state={ButtonCustomState.BUTTONEDIT}>
                    {t('Upravit')}
                </ButtonCustom>
                : <div className={cls.ButtonContainer}>
                    <ButtonCustom onClick={cancleEdit} state={ButtonCustomState.BUTTONCANCLE}>
                        {t('Zrušení')}
                    </ButtonCustom>
                    <ButtonCustom classes={cls.ButtonC} onClick={UpdateHandler} state={ButtonCustomState.BUTTONEDIT}>
                        {t('Uložit')}
                    </ButtonCustom>
                </div>
        }

    </>)
})
export default HeaderProfile
