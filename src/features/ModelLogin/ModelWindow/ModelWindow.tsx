import { Portal } from 'share/ui/Portal'
import { Modal } from 'widgets/Modal'
import { LoginForm } from 'features/ModelLogin/LoginForm/LoginForm'

interface ModalWindowProps {
    isOpen: boolean
    close: () => void
}
export const ModelWindow: React.FC<ModalWindowProps> = ({ isOpen, close }: ModalWindowProps) => {
    return (<>
        <Portal element={document.body}>
            <Modal lazy={true} isOpen={isOpen} close={close}>
                <LoginForm close={close}/>
            </Modal>
        </Portal>
    </>)
}
