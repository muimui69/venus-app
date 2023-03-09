import { useGlobal} from '../backend/context/GlobalContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute= ({children}) => {
    const {user} = useGlobal();  

    if(!user) return <Navigate to='/'/>

    return <>{children}</>
}