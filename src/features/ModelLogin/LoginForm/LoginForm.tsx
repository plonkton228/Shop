import { useTranslation } from 'react-i18next'
import { InputCustom, InputState } from 'share/ui/InputCustom/ui/InputCustom'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import cls from './loginForm.module.scss'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'
import { useDispatch, useSelector } from 'react-redux'
import { getEmail, setEmail } from 'entities/EmailUser'
import { getPassword, setPassword } from 'entities/PasswordUser'

interface LoginFormProps {
    close: () => void
}
export const LoginForm: React.FC<LoginFormProps> = ({ close }: LoginFormProps) => {
    const dispath = useDispatch()
    const email = useSelector(getEmail)
    const password = useSelector(getPassword)
    console.log(password)

    const { t } = useTranslation('modal')
    const ChangeHandlerPassword = (e: string) => {
        dispath(setEmail(e))
    }
    const ChangeHandlerEmail = (e: string) => {
        dispath(setPassword(e))
    }
    return (
        <div className={cls.LoginC}>
            <div className={cls.OrderContainer}> <h1>{t('Přihlásit se')}</h1> <div onClick={close} className={cls.close}/> </div>
            <hr/>
            <div className={cls.InputContainer}>
                <InputCustom value={email} onChange={ChangeHandlerEmail} classe={cls.InputLogin} firstplace={<div>{t('Emailová adresa')}</div>} state={InputState.MODALINPUT}></InputCustom>
                <InputCustom value={password} onChange={ChangeHandlerPassword} classe={cls.InputLogin} firstplace={<div>{t('Heslo')}</div>} secondplace={<LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zapomenuté heslo')}</LinkCustom>} state={InputState.MODALINPUT} type= 'password'></InputCustom>
                <div className={cls.checkboxContainer} > <InputCustom type='checkbox' state={InputState.MODALINPUT}/> <p>{ t('Zůstat přihlášen') }</p></div>
                <ButtonCustom classes={cls.BottanLogin} state={ButtonCustomState.BUTTONMODAL}>{t('pokračovat')}</ButtonCustom>
                <p>{t('Nemáte účet?')} <LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zaregistrujte se zde')}</LinkCustom></p>
            </div>
        </div>
    )

}
