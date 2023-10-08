import { useTranslation } from 'react-i18next'
import { InputCustom, InputState } from 'share/ui/InputCustom/ui/InputCustom'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import cls from './loginForm.module.scss'
import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'
import { getPassword, setPassword } from 'entities/Password'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { getEmail, setEmail } from 'entities/Email'
import { authUser } from 'features/ModelLogin/models/actions/authUser'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { getErrorAuth } from 'features/ModelLogin/models/selectors/getErrorAuth/getErrorAuth'
import { ErrorsAuth } from 'features/ModelLogin/models/types/AuthUserSchema'

interface LoginFormProps {
    close: () => void
}
const LoginForm: React.FC<LoginFormProps> = ({ close }: LoginFormProps) => {
    const password = useSelector(getPassword)
    const email = useSelector(getEmail)
    const errors = useSelector(getErrorAuth)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('modal')
    const HandlerPassword = useCallback((e: string) => {
        dispatch(setPassword(e))
    }, [password])
    const HandlerEmail = useCallback((e: string) => {
        dispatch(setEmail(e))
    }, [email])
    const ClickHandler = () => {
        close()
        dispatch(authUser({ email, password }))
    }
    const validErros = {
        [ErrorsAuth.NO_USER_EMAIL]: t('Nevyplnili jste pole pro e-mail'),
        [ErrorsAuth.NO_USER_PASSWORD]: t('Nevyplnili jste pole pro heslo'),
        [ErrorsAuth.ERROR_SERVER]: t('Něco se pokazilo')
    }
    return (
        <div className={cls.LoginC}>
            <div className={cls.OrderContainer}> <h1>{t('Přihlásit se')}</h1> <ButtonCustom classes={cls.close} state={ButtonCustomState.BUTTONCLOSE} onClick={close}/> </div>
            <hr/>
            <div className={cls.InputContainer}>
                {
                    errors?.map((error) => <h1 className={cls.error}>{validErros[error]}</h1>)
                }
                <InputCustom value={email} onChange={HandlerEmail} classe={cls.InputLogin} firstplace={<div>{t('Emailová adresa')}</div>} state={InputState.MODALINPUT}></InputCustom>
                <InputCustom value={password} onChange={HandlerPassword} classe={cls.InputLogin} firstplace={<div>{t('Heslo')}</div>} secondplace={<LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zapomenuté heslo')}</LinkCustom>} state={InputState.MODALINPUT} type= 'password'></InputCustom>
                <div className={cls.checkboxContainer} > <InputCustom type='checkbox' state={InputState.MODALINPUT}/> <p>{ t('Zůstat přihlášen') }</p></div>
                <ButtonCustom onClick={ClickHandler} classes={cls.BottanLogin} state={ButtonCustomState.BUTTONMODAL}>{t('pokračovat')}</ButtonCustom>
                <p>{t('Nemáte účet?')} <LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zaregistrujte se zde')}</LinkCustom></p>
            </div>
        </div>
    )

}
export default LoginForm
