import { DynamicProvider } from 'share/libs/DynamicRedux/DynamicProvider'
import { userReducer } from 'entities/User'
import { SideBar } from 'widgets/SideBar'
import { AsyncInnerProfile } from 'features/Profile/InnerProfiel/ui/AsyncInnerProfile'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface ProfileSideBarProps {
    Open: boolean
    HandlerOpen: () => void
}
export const ProfileSideBar: React.FC<ProfileSideBarProps> = (props: ProfileSideBarProps) => {
    const {
        Open,
        HandlerOpen
    } = props
    const Reducers: ReducersMapObject = {
        user: userReducer
    }
    return (<>
        <SideBar lazy={true} setOpen={HandlerOpen} Open={Open}>
            <DynamicProvider DynamicReducers={Reducers}>
                <AsyncInnerProfile/>
            </DynamicProvider>
        </SideBar>
    </>)
}
