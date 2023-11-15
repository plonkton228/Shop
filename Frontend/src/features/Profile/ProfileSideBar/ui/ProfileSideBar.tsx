import { SideBar } from 'widgets/SideBar'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { useSelector } from 'react-redux/es/exports'
import { getLoadingProfile, profileReducer, getReadOnly, fetchProfile, setInfo, getEmailProfile, getFirstNameProfile } from 'features/Profile'
import { DynamicProvider } from 'share/libs/DynamicRedux/DynamicProvider'
import { AsyncInnerProfile } from '../../InnerProfiel/ui/AsyncInnerProfile'
import { getUser } from 'entities/User/models/selectors/getUser/getUser'
import { passwordReducer } from 'entities/Password'

interface ProfileSideBarProps {
    Open: boolean
    HandlerOpen: () => void
}
export const ProfileSideBar: React.FC<ProfileSideBarProps> = memo((props: ProfileSideBarProps) => {
    const {
        Open,
        HandlerOpen
    } = props

    const dispatch = useAppDispatch()
    const isLoading = useSelector(getLoadingProfile)
    const readOnly = useSelector(getReadOnly)
    const email = useSelector(getEmailProfile)
    const first_name = useSelector(getFirstNameProfile)
    const userId = useSelector(getUser)
    const EditFirstName = useCallback((value?: string) => {
        dispatch(setInfo({ first_name: value }))
    }, [dispatch])

    const EditEmail = useCallback((value?: string) => {
        dispatch(setInfo({ email: value }))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProfile(userId.id))
    }, [dispatch])

    return (<>
        <DynamicProvider DynamicReducers={ { profile: profileReducer, password: passwordReducer } }>
            <SideBar lazy={true} setOpen={HandlerOpen} Open={Open}>
                <AsyncInnerProfile HandlerCloseSideBar = {HandlerOpen} EditFirstName={EditFirstName} EditEmail={EditEmail} readOnly={readOnly} first_name={first_name} email={email} isLoading={isLoading} />
            </SideBar>
        </DynamicProvider>
    </>)
})
