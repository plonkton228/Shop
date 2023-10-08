import { Portal } from 'share/ui/Portal'
import { ButtonCustom } from 'share/ui/ButtonCustom'
import { ButtonCustomState } from 'share/ui/ButtonCustom/ui/ButtonCustom'
import { useState } from 'react'
import cls from '../models/BurgerMobile.module.scss'
import { AsyncPanelNavBar } from 'features/MobileNavBar/PanelNavBar/ui/AsyncPanelNavBar'
import { useClassName } from 'share/libs/useClassName/useClassName'

export const BurgerNavBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const HandlerOpen = () => {
        setOpen((prevState) => !prevState)
    }

    return (<>
        <div className={cls.BurgerContainer} onClick={HandlerOpen} >
            <ButtonCustom classes={useClassName({ cls: cls.Burger, mode: { [cls.open]: open }, classes: [] })} state={ ButtonCustomState.BUTTONBURGER }/>
        </div>
        <Portal element={document.body}>
            <AsyncPanelNavBar Open={open}/>
        </Portal>
    </>)
}
