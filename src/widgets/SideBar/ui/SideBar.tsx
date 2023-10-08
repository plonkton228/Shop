import cls from '../models/styles/SideBar.module.scss'
import { useClassName } from 'share/libs/useClassName/useClassName'
import { Portal } from 'share/ui/Portal'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ButtonCustom, ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { DynamicProvider } from 'share/libs/DynamicRedux/DynamicProvider'
import { profileReducer } from 'features/Profile/models/profileSlice/profileSlice'

interface SideBarProps {
    Open: boolean
    setOpen: () => void
    children?: React.ReactNode
    lazy?: boolean
}
const ANIMATION_DELAY = 300
export const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
    const [hide, setHide] = useState<boolean>(true)
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const current = useRef<ReturnType<typeof setTimeout>>()
    const {
        Open,
        setOpen,
        lazy,
        children
    } = props
    const Closing = useCallback(() => {
        setIsClosing(true)
        current.current = setTimeout(() => {
            setIsClosing(false)
            setOpen()
        }, ANIMATION_DELAY)
    }, [])

    useEffect(() => {
        if (lazy && Open) {
            setHide(false)
        }
    }, [Open])
    if (lazy && hide) {
        return null
    }
    return (
        <Portal element={document.body}>
            <div className={ useClassName({ cls: cls.SideBar, mode: { [cls.OpenB]: Open, [cls.closing]: isClosing }, classes: [] }) }>
                <div className={ useClassName({ cls: cls.SideBarContainer, mode: { [cls.OpenS]: Open, [cls.closing]: isClosing }, classes: [] }) } >
                    <ButtonCustom onClick={Closing} state={ButtonCustomState.BUTTONCLOSE}/>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
