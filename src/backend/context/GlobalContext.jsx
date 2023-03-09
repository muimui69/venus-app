import {
    createContext, 
    useContext , 
    useEffect,  
    useState 
} from 'react';

import { 
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

import {auth,db} from '../FirebaseConfig';

export const globalContext = createContext();

export const useGlobal = () =>{
    const context = useContext(globalContext);
    return context;
}


export const GlobalProvider = ({children}) =>{

    const [user,setUser] = useState(null);

    const logout = ()=> signOut(auth);

    useEffect( ()=> {
        onAuthStateChanged( auth , currentUser =>{
          setUser(currentUser)
        });
    },[auth]);

    return (
        <globalContext.Provider
            value ={{
                user,
                logout
            }}
        >
            {children}
        </globalContext.Provider>
    )
}