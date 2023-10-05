import logo from '../models/img/Solopharma.png'
import profile from '../models/img/profile.png'
import shop from '../models/img/shop.png'
import search from '../models/img/search.png'
import cls from '../models/styles/NavBar.module.scss'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { useState } from 'react'
import { UnderNavBar } from 'features/UndeNavBar'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { useTranslation } from 'react-i18next'
import { useNavBar } from 'share/libs/useNavBar/useNavBar'
import { ModelWindow } from 'features/ModelLogin'
import { AsyncSideBar } from 'widgets/SideBar/ui/AsyncSideBar'

export const NavBar: React.FC = () => {
    const [state, setState] = useState<boolean>(false)
    const { t } = useTranslation('main')
    const { isOpen, OpenMode, CloseMode } = useNavBar()
    const [isOpenSide, setIsOpenSide] = useState<boolean>()

    const HandlerSideBar = () => {
        setIsOpenSide((prevState) => !prevState)
    }

    return (<>
        <div data-testid = 'Navbar' className = {cls.container}>
            <div className = {cls.logo_container}><img src={logo}/> <h1>{t('Solo')}<span>{t('Pharma')}</span></h1></div>
            <nav className = {cls.navigate_container}>
                <LinkCustom to= '/' state={StateLink.NAVBAR}>{t('Domů')}</LinkCustom>
                <ButtonCustom data-testid = 'ButtonNavbar' onClick={() => { setState((prevState) => !prevState) } } state={ButtonCustomState.RESET}>{t('Zboží')}</ButtonCustom>
                <LinkCustom to= '/opt' state={StateLink.NAVBAR}>{t('Velkoobchodník')}</LinkCustom>
                <LinkCustom to= '/project' state={StateLink.NAVBAR}>{t('Projekt na klíč')}</LinkCustom>
                <LinkCustom to= '/aboutus' state={StateLink.NAVBAR}>{t('O společnosti')}</LinkCustom>
            </nav>
            <div className={cls.NavigatePanel}>
                <ButtonCustom onClick={OpenMode} state={ButtonCustomState.NAVBARBUTTON}> <img src={profile}/> </ButtonCustom>
                <ButtonCustom onClick={HandlerSideBar} state={ButtonCustomState.NAVBARBUTTON}> <img src={profile}/> </ButtonCustom>
                <img src={search}/>
                <LanguageSwitcher/>
                <img src={shop}/>
            </div>
        </div>
        <UnderNavBar state={state}/>
        {
            isOpenSide && <AsyncSideBar lazy={true} setOpen={HandlerSideBar} Open={isOpenSide}/>
        }
        {
            isOpen && <ModelWindow isOpen={isOpen} close={CloseMode}/>
        }
    </>)
}
