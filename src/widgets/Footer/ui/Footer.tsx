import {useTranslation} from "react-i18next";
import cls from "../models/styles/Footer.module.scss";
import logo from "../models/imgs/Solopharma.png";
import {LinkCustom} from "share/ui/LinkCustom";
import {StateLink} from "share/ui/LinkCustom/ui/LinkCustom";
import {ButtonCustom} from "share/ui/ButtonCustom";
import {ButtonCustomState} from "share/ui/ButtonCustom/ui/ButtonCustom";

export const Footer: React.FC = () => {
    const { t } = useTranslation('main')
    return ( <>
      <div className={cls.Foooter_Container}>
          <div className={cls.Inner_Container}>
              <div className = {cls.logo_container}><img src={logo}/> <h1>{t('Solo')}<span>{t('Pharma')}</span></h1></div>
              <nav className = {cls.Navigate_Container}>
                  <LinkCustom classes={cls.LinkNavigate} to= '/' state={StateLink.NAVBAR}>{t('Domů')}</LinkCustom>
                  <ButtonCustom classes={cls.ButtonNavigate} data-testid = 'ButtonNavbar' state={ButtonCustomState.RESET}>{t('Zboží')}</ButtonCustom>
                  <LinkCustom classes={cls.LinkNavigate} to= '/opt' state={StateLink.NAVBAR}>{t('Velkoobchodník')}</LinkCustom>
                  <LinkCustom classes={cls.LinkNavigate} to= '/project' state={StateLink.NAVBAR}>{t('Projekt na klíč')}</LinkCustom>
                  <LinkCustom classes={cls.LinkNavigate} to= '/aboutus' state={StateLink.NAVBAR}>{t('O společnosti')}</LinkCustom>
              </nav>
              <div className={cls.Info_Container}>
                  <h1>Solopharma Group, s.r.o</h1>
                  <p>Number: +420 797 837 856</p>
                  <p>Email: oshchepkova.solar@gmail.com</p>
                  <p>Adress: Na Lysinách 551/34, Praha 4 - Hodkovičky, PSČ 147 00</p>
              </div>
          </div>
      </div>
    </>)
}
