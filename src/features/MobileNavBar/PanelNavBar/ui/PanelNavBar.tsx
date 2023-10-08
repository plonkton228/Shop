import cls from '../models/PanelNavBar.module.scss'
import { useClassName } from 'share/libs/useClassName/useClassName'
import { useEffect, useState } from 'react'
import { LanguageSwitcherMobile } from 'features/LanguageSwitcherMobile/ui/LanguageSwitcherMobile'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'
import { useTranslation } from 'react-i18next'

interface PanelNavBarProps {
    Open: boolean
}
const PanelNavBar: React.FC<PanelNavBarProps> = (props: PanelNavBarProps) => {
    const [hide, setHide] = useState<boolean>(true)
    const { t } = useTranslation('navbar')
    const {
        Open
    } = props
    useEffect(() => {
        if (hide && Open) {
            setHide(false)
        }
    }, [Open])
    if (hide) {
        return null
    }
    return (<>
        <div className={useClassName({ cls: cls.Container_MobileBar, mode: { [cls.open]: Open }, classes: [] })}>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('solární panel')}</LinkCustom>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Měnič')}</LinkCustom>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Baterie')}</LinkCustom>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Kabela')}</LinkCustom>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Konektor')}</LinkCustom>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Montážní materiály')}</LinkCustom>
            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Velkoobchodník')}</LinkCustom>

            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('Projekt na klíč')}</LinkCustom>

            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('účet')}</LinkCustom>

            <hr/>
            <LinkCustom to={'#'} state={StateLink.LINKMOBILE}>{t('O společnosti')}</LinkCustom>
            <hr/>

            <LanguageSwitcherMobile/>
        </div>
    </>)
}
export default PanelNavBar
