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
import { logUser } from '../models/actions/logUser'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { ErrorsLog } from '../models/types/AuthUserSchema'
import { fetchFirstPageGoods } from 'pages/GoodsPage/models/actions/fetchFirstPageGoods'
import { getErrorLog } from 'features/ModelUser/models/selectors/getErrorLog/getErrorLog'

interface LoginFormProps {
    close: () => void
    OpenModalAuto: () => void
}
const LoginForm: React.FC<LoginFormProps> = ({ close, OpenModalAuto }: LoginFormProps) => {
    const password = useSelector(getPassword)
    const email = useSelector(getEmail)
    const errors = useSelector(getErrorLog)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('modal')
    const HandlerPassword = useCallback((e: string) => {
        dispatch(setPassword(e))
    }, [password])
    const HandlerEmail = useCallback((e: string) => {
        dispatch(setEmail(e))
    }, [email])
    const ClickHandler = useCallback(() => {
        dispatch(logUser({ email, password, callback: close })).then((response) => {
            dispatch(fetchFirstPageGoods({ replace: true }))
        })

    }, [dispatch, email, password])
    const OpenAutoHandler = useCallback(() => {
        close()
        OpenModalAuto()
    }, [])
    const validErros = {
        [ErrorsLog.NO_USER_EMAIL]: t('Nevyplnili jste pole pro e-mail'),
        [ErrorsLog.NO_USER_PASSWORD]: t('Nevyplnili jste pole pro heslo'),
        [ErrorsLog.ERROR_SERVER]: t('Něco se pokazilo')
    }
    return (
        <div className={cls.LoginC}>
            <div className={cls.OrderContainer}> <h1>{t('Přihlásit se')}</h1> <ButtonCustom classes={cls.close} state={ButtonCustomState.BUTTONCLOSE} onClick={close}/> </div>
            <hr/>
            <div className={cls.InputContainer}>
                {
                    errors?.map((error) => <h1 className={cls.error}>{validErros[error]}</h1>)
                }
                <div className={cls.ContainerInput}>
                    <div className={cls.PlaceContainer}> {t('Emailová adresa')}</div>
                    <InputCustom value={email} onChange={HandlerEmail} classe={cls.InputLogin} state={InputState.MODALINPUT}></InputCustom>
                </div>

                <div className={cls.ContainerInput}>
                    <div className={cls.PlaceContainer}> {<div>{t('Heslo')}</div>} <span>{<LinkCustom to='#' state={StateLink.LINKRESET}>{t('Zapomenuté heslo')}</LinkCustom>}</span></div>
                    <InputCustom value={password} onChange={HandlerPassword} classe={cls.InputLogin} state={InputState.MODALINPUT} type= 'password'></InputCustom>
                </div>
                <ButtonCustom onClick={ClickHandler} classes={cls.BottanLogin} state={ButtonCustomState.BUTTONMODAL}>{t('pokračovat')}</ButtonCustom>
                <p>{t('Nemáte účet?')} <ButtonCustom onClick={OpenAutoHandler} state={ButtonCustomState.BUTTONAUTO}>{t('Zaregistrujte se zde')}</ButtonCustom></p>
            </div>
        </div>
    )

}
export default LoginForm
