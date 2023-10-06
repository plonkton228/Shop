import cls from '../models/PanelNavBar.module.scss'
import { useClassName } from 'share/libs/useClassName/useClassName'
import { useEffect, useState } from 'react'
interface PanelNavBarProps {
    Open: boolean
}
const PanelNavBar: React.FC<PanelNavBarProps> = (props: PanelNavBarProps) => {
    const [hide, setHide] = useState<boolean>(true)
    const {
        Open
    } = props
    useEffect(() => {
        if (hide && Open) {
            setHide(false)
        }
    }, [Open])
    if (hide) {
        return null
    }
    return (<>
        <div className={useClassName({ cls: cls.Container_MobileBar, mode: { [cls.open]: Open }, classes: [] })}>

        </div>
    </>)
}
export default PanelNavBar
