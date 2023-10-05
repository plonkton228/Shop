import { Portal } from 'share/ui/Portal'
import { Modal } from 'widgets/Modal'
import { AsyncLoginForm } from 'features/ModelLogin/LoginForm/AsyncLoginForm'
import { DynamicProvider } from 'share/libs/DynamicRedux/DynamicProvider'
import { AuthReducer } from 'features/ModelLogin'
import { emailReducer } from 'entities/Email'
import { passwordReducer } from 'entities/Password'

interface ModalWindowProps {
    isOpen: boolean
    close: () => void
}
export const ModelWindow: React.FC<ModalWindowProps> = ({ isOpen, close }: ModalWindowProps) => {
    return (<>
        <Portal element={document.body}>
            <Modal lazy={true} isOpen={isOpen} close={close}>
                <DynamicProvider DynamicReducers={{ auth: AuthReducer, email: emailReducer, password: passwordReducer }}>
                    <AsyncLoginForm close={close}/>
                </DynamicProvider>
            </Modal>
        </Portal>
    </>)
}
