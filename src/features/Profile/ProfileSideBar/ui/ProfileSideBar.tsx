import { SideBar } from 'widgets/SideBar'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'share/libs/useRedux/useRedux'
import { useSelector } from 'react-redux/es/exports'
import { getLoadingProfile, profileReducer, getReadOnly, fetchProfile, setInfo, getNameProfile, getLastName } from 'features/Profile'
import { DynamicProvider } from 'share/libs/DynamicRedux/DynamicProvider'
import { AsyncInnerProfile } from '../../InnerProfiel/ui/AsyncInnerProfile'

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
    const name = useSelector(getNameProfile)
    const lastname = useSelector(getLastName)
    const EditName = useCallback((value?: string) => {
        dispatch(setInfo({ name: value }))
    }, [dispatch])

    const EditLastName = useCallback((value?: string) => {
        dispatch(setInfo({ lastname: value }))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    return (<>
        <DynamicProvider DynamicReducers={ { profile: profileReducer } }>
            <SideBar lazy={true} setOpen={HandlerOpen} Open={Open}>
                <AsyncInnerProfile HandlerCloseSideBar = {HandlerOpen} EditName={EditName} EditLastName={EditLastName} readOnly={readOnly} lastname={lastname} name={name} isLoading={isLoading} />
            </SideBar>
        </DynamicProvider>
    </>)
})
