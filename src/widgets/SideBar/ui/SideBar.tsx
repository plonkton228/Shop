import cls from '../models/styles/SideBar.module.scss'
import { useClassName } from 'share/libs/useClassName/useClassName'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { Portal } from 'share/ui/Portal'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ProfileSideBar } from 'features/ProfileSideBar'

interface SideBarProps {
    Open: boolean
    setOpen: () => void
    lazy?: boolean
}
const ANIMATION_DELAY = 300
const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
    const [hide, setHide] = useState<boolean>(true)
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const current = useRef<ReturnType<typeof setTimeout>>()
    const {
        Open,
        setOpen,
        lazy
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
                    <ProfileSideBar CloseHandler={Closing}/>
                </div>
            </div>
        </Portal>
    )
}
export default SideBar
