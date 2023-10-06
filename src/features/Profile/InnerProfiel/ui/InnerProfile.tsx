import cls from '../models/styles/ProfileSideBar.module.scss'
import Order from '../models/imgs/Order.png'
import Setting from '../models/imgs/Setting.png'
import { useClassName } from 'share/libs/useClassName/useClassName'
import LogOut from '../models/imgs/LogOut.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'

const InnerProfile: React.FC = () => {
    const { t } = useTranslation('profile')
    const [open, setOpen] = useState<boolean>()
    const HadlerOpen = () => {
        setOpen(prevState => !prevState)
    }
    return (<>
        <div className={ cls.ProfileContainer }>
            <div className={ cls.FlexContainer }>
                <h1>{t('účet')}</h1>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <h1>Nikita Malgin</h1>
                <div className={ cls.ContentContainer }> <img src={Order}/> <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('Moje objednávky')}</LinkCustom></div>
                <div onClick={HadlerOpen} className={ cls.ContentContainer }> <img src={Setting}/> <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('Nastavení')}</LinkCustom></div>
                <div className={ useClassName({ cls: cls.ContentContainerSet, mode: { [cls.open]: open }, classes: [] })}>
                    <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('Změna hesla')} </LinkCustom>
                    <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('smazat účet')}</LinkCustom>
                </div>
                <div className={ cls.ContentContainer }> <img src={LogOut}/> <LinkCustom to = '#' state={StateLink.LINKRESET}>{t('Vystupte')}</LinkCustom></div>
            </div>
        </div>
    </>)
}
export default InnerProfile
