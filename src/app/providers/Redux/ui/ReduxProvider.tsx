import { Provider } from 'react-redux'
import { SetUpStore } from 'app/providers/Redux/store/store'
interface ReduxProviderProps {
    children: React.ReactNode
}
export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }: ReduxProviderProps) => {
    const store = SetUpStore()
    return (<>
        <Provider store={store}>
            {children}
        </Provider>
    </>)
}
