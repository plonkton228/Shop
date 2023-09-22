import cls from '../models/modal.module.scss'
import { useClassName } from 'share/libs/useClassName/useClassName'
import { useCallback, useEffect, useRef, useState } from 'react'

interface ModalProps {
    isOpen: boolean
    children?: React.ReactNode
    close: () => void

}
const ANIMATION_DELAY = 300
export const Modal: React.FC<ModalProps> = ({ isOpen, children, close }: ModalProps) => {
    const [isClosing, setIsClosing] = useState<boolean>()
    const refTime = useRef<ReturnType<typeof setTimeout>>()
    const Closing = useCallback(() => {

        setIsClosing(true)
        refTime.current = setTimeout(() => {
            close()
            setIsClosing(false)
        }, ANIMATION_DELAY)

    }, [isClosing])
    const mode: Record<string, boolean> = {
        [cls.open]: isOpen,
        [cls.isClosing]: isClosing
    }
    useEffect(() => {
        clearTimeout(refTime.current)
    }, [isOpen])
    return (<>
        <div className={useClassName({ cls: cls.Modal, mode, classes: [] })}>
            <div onClick={ Closing } className={cls.Back_container}>
                <div onClick={(e) => { e.stopPropagation() } } className={cls.Content_container}>

                </div>
            </div>
        </div>
    </>)
}
