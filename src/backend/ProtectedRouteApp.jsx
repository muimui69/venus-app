import { useGlobal} from '../backend/context/GlobalContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRouteApp = ({children}) => {
    const {user} = useGlobal();  

    if(user) return <Navigate to='/home'/>

    return <>{children}</>
}