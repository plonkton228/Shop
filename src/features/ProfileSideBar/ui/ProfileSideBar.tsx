import { useTranslation } from 'react-i18next'
import Order from '../models/imgs/Order.png'
import Setting from '../models/imgs/Setting.png'
import LogOut from '../models/imgs/LogOut.png'
import cls from '../models/styles/ProfileSideBar.module.scss'
import { useState } from 'react'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { useClassName } from 'share/libs/useClassName/useClassName'
import { DynamicProvider } from 'share/libs/DynamicRedux/DynamicProvider'
import { userReducer } from 'entities/User'

interface ProfileSideBarProps {
    CloseHandler: () => void
}
export const ProfileSideBar: React.FC<ProfileSideBarProps> = (props: ProfileSideBarProps) => {
    const { t } = useTranslation('profile')
    const [open, setOpen] = useState<boolean>()
    const HadlerOpen = () => {
        setOpen(prevState => !prevState)
    }
    const {
        CloseHandler
    } = props
    return (<>
        <DynamicProvider DynamicReducers={{ user: userReducer }}>
            <div className={ cls.ProfileContainer }>
                <ButtonCustom onClick={CloseHandler} state={ButtonCustomState.BUTTONCLOSE}/>
                <div className={ cls.FlexContainer }>
                    <h1>{t('účet')}</h1>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <h1>Nikita Malgin</h1>
                    <div className={ cls.ContentContainer }> <img src={Order}/> <p>{t('Moje objednávky')}</p></div>
                    <div onClick={HadlerOpen} className={ cls.ContentContainer }> <img src={Setting}/> <p>{t('Nastavení')}</p></div>
                    <div className={ useClassName({ cls: cls.ContentContainerSet, mode: { [cls.open]: open }, classes: [] })}>
                        <p>{t('Změna hesla')}</p>
                        <p>{t('smazat účet')}</p>
                    </div>
                    <div className={ cls.ContentContainer }> <img src={LogOut}/> <p>{t('Vystupte')}</p></div>
                </div>
            </div>
        </DynamicProvider>
    </>)
}
