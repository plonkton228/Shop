import { useTranslation } from 'react-i18next'
import { InputCustom, InputState } from 'share/ui/InputCustom/ui/InputCustom'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import cls from './loginForm.module.scss'
import { useState } from 'react'
import { type User } from 'features/ModelLogin/models/types'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'

interface LoginFormProps {
    close: () => void
}
export const LoginForm: React.FC<LoginFormProps> = ({ close }: LoginFormProps) => {
    const [user, setUser] = useState<User>({ email: '', password: '' })
    const { t } = useTranslation('modal')
    const ChangeHandlerPassword = (e: string) => {
        setUser({ ...user, password: e })
    }
    const ChangeHandlerEmail = (e: string) => {
        setUser({ ...user, email: e })
    }
    return (
        <div className={cls.LoginC}>
            <div className={cls.OrderContainer}> <h1>{t('Přihlásit se')}</h1> <div onClick={close} className={cls.close}/> </div>
            <hr/>
            <div className={cls.InputContainer}>
                <InputCustom value={user.email} onChange={ChangeHandlerEmail} classe={cls.InputLogin} firstplace={<div>{t('Emailová adresa')}</div>} state={InputState.MODALINPUT}></InputCustom>
                <InputCustom value={user.password} onChange={ChangeHandlerPassword} classe={cls.InputLogin} firstplace={<div>{t('Heslo')}</div>} secondplace={<LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zapomenuté heslo')}</LinkCustom>} state={InputState.MODALINPUT} type= 'password'></InputCustom>
                <div className={cls.checkboxContainer} > <InputCustom type='checkbox' state={InputState.MODALINPUT}/> <p>{ t('Zůstat přihlášen') }</p></div>

                <ButtonCustom classes={cls.BottanLogin} state={ButtonCustomState.BUTTONMODAL}>{t('pokračovat')}</ButtonCustom>
                <p>{t('Nemáte účet?')} <LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zaregistrujte se zde')}</LinkCustom></p>
            </div>
        </div>
    )

}
