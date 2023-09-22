import { useState } from 'react'

export const useNavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const OpenMode = () => {
        setIsOpen(true)
    }
    const CloseMode = () => {
        setIsOpen(false)
    }

    return {
        isOpen,
        OpenMode,
        CloseMode
    }
}
