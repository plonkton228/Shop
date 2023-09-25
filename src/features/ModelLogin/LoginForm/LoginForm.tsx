import {useTranslation} from 'react-i18next'
import {InputCustom, InputState} from "share/ui/InputCustom/ui/InputCustom";
import {ButtonCustom} from "share/ui/ButtonCustom";
import {ButtonCustomState} from "share/ui/ButtonCustom/ui/ButtonCustom";
import cls from './LoginForm.model.scss'
interface LoginFormProps {
    props?: boolean
}
export const LoginForm: React.FC<LoginFormProps> = () => {
    const { t } = useTranslation('modal')
    return (
        <div className={cls.LoginC}>
            <h1>{t('Přihlásit se')}</h1>
            <hr/>
            <div>
                <InputCustom firstplace={<div>{t('Emailová adresa')}</div>} state={InputState.MODALINPUT}></InputCustom>
                <InputCustom firstplace={<div>{t('Heslo')}</div>} secondplace={<div>{t('Zapomenuté heslo')}</div>} state={InputState.MODALINPUT} type= 'password'></InputCustom>
                <ButtonCustom state={ButtonCustomState.BUTTONMODAL}>{t('pokračovat')}</ButtonCustom>
            </div>
        </div>
    )

}
