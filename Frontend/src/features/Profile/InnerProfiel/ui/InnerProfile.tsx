import cls from '../models/styles/ProfileSideBar.module.scss'
import Order from '../models/imgs/Order.png'
import Setting from '../models/imgs/Setting.png'
import { useClassName } from 'share/libs/useClassName/useClassName'
import LogOut from '../models/imgs/LogOut.png'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'
import { Loader } from 'share/ui/Loader'
import { LoaderState } from 'share/ui/Loader/ui/Loader'
import { InputCustom, InputState } from 'share/ui/InputCustom/ui/InputCustom'
import HeaderProfile from 'features/Profile/HeaderProfile/ui/HeaderProfile'
import { getErrorProfile } from 'features/Profile/models/selectors/getErrorProfile/getErrorProfile'
import { useSelector } from 'react-redux/es/exports'
import { ErrorsProfile } from 'features/Profile/models/types/ProfileType'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { logout } from 'entities/User'
import { fetchSortPageGood } from 'pages/GoodsPage/models/actions/fetchSortPageGood'
import { useNavigate } from 'react-router-dom'

interface InnerProfileProps {
    isLoading?: boolean
    name?: string
    lastname?: string
    error?: string
    readOnly?: boolean
    EditName?: () => void
    EditLastName?: () => void
    HandlerCloseSideBar?: () => void
}
const InnerProfile: React.FC<InnerProfileProps> = memo((props: InnerProfileProps) => {
    const {
        isLoading,
        name,
        lastname,
        error,
        readOnly,
        EditName,
        EditLastName,
        HandlerCloseSideBar
    } = props
    const { t } = useTranslation('profile')
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const errors = useSelector(getErrorProfile)
    const navigate = useNavigate()
    const HandlerOpen = useCallback(() => {
        setOpen(prevState => !prevState)
    }, [open])
    const logOut = useCallback(() => {
        HandlerCloseSideBar()
        dispatch(logout())
        navigate('/')
        dispatch(fetchSortPageGood({ replace: true }))
    }, [name, lastname])
    const validate = {
        [ErrorsProfile.NO_USER_NAME]: t('Pole jména musí být vyplněno'),
        [ErrorsProfile.NO_USER_LASTNAME]: t('Pole příjmení musí být vyplněno'),
        [ErrorsProfile.ERROR_SERVER]: t('Něco se pokazilo')
    }
    return (<>
        <div className={ cls.ProfileContainer }>
            <div className={ cls.FlexContainer }>
                <h1>{t('účet')}</h1>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {
                    errors?.map((error) => <h1 key={error} className={cls.error}>{validate[error]}</h1>)
                }
                { isLoading
                    ? <Loader state={LoaderState.Secondary}/>
                    : <div>

                        <div className={cls.InputContainer}> <p>{t('název')}</p> : <InputCustom onChange={EditName} readonly={readOnly} value={name} state={InputState.RESETINPUT}></InputCustom> </div>
                        <div className={cls.InputContainer}> <p>{t('příjmení')}</p> : <InputCustom onChange={EditLastName} readonly={readOnly} value={lastname} state={InputState.RESETINPUT}></InputCustom> </div>
                    </div>
                }
                <div className={ cls.ContentContainer }> <img src={Order}/> <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('Moje objednávky')}</LinkCustom></div>
                <div onClick={HandlerOpen} className={ cls.ContentContainer }> <img src={Setting}/> <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('Nastavení')}</LinkCustom></div>
                <div className={ useClassName({ cls: cls.ContentContainerSet, mode: { [cls.open]: open }, classes: [] })}>
                    <HeaderProfile name={name} lastname={lastname}/>
                </div>
                <div className={ cls.ContentContainer }> <img src={LogOut}/> <ButtonCustom onClick={logOut} state={ButtonCustomState.NAVBARBUTTON}>{t('Vystupte')}</ButtonCustom></div>
            </div>
        </div>
    </>)
})
export default InnerProfile
