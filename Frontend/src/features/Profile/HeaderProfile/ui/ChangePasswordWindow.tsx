import { Portal } from 'share/ui/Portal'
import { Modal } from 'widgets/Modal'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { InputCustom, InputState } from 'share/ui/InputCustom/ui/InputCustom'
import { useSelector } from 'react-redux'
import { getPassword } from '../../models/selectors/getPasswordProfile/getPasswordProfile'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { setPassword } from '../../models/passwordSlice/passwordSlice'
import { getErrorProfile } from 'features/Profile/models/selectors/getErrorProfile/getErrorProfile'
import { ErrorsPasswordUpdate } from 'features/Profile/models/types/ProfileType'

interface VerifyWindowProps {
    isOpen: boolean
    close: () => void
}
const ChangePasswordWindow: React.FC<VerifyWindowProps> = memo(({ isOpen, close }: VerifyWindowProps) => {
    const {t} = useTranslation('modal')
    const password = useSelector(getPassword)
    const errors = useSelector(getErrorProfile)
    const dispatch = useAppDispatch()
    const onChangePassword = useCallback((e:any) => {
          dispatch(setPassword(e.target.value))
    }, [password])
    const validate = {
        [ErrorsPasswordUpdate.ERROR_SERVER]: 'Somethind went wrong',
       [ErrorsPasswordUpdate.WRONG_PASSWORD]: 'incorrect password'
    }
    return (<>
        <Portal element={document.body}>
            <Modal lazy={true} isOpen={isOpen} close={close}>
                   <div>
                    {errors && errors?.map((error: ErrorsPasswordUpdate) => <h1>{validate[error]}</h1>)}
                     <h1>Change password</h1>
                     <InputCustom state= {InputState.INPUTPAYMENT} value= {password} onChange={onChangePassword}/>
                   </div>
            </Modal>
        </Portal>
    </>)
})
export default ChangePasswordWindow