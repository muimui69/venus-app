import {
    createContext, 
    useContext , 
    useEffect,  
    useState 
} from 'react';

import { 
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

import {auth,db} from '../FirebaseConfig';

import { collection,doc,setDoc,addDoc,getDoc, updateDoc,onSnapshot,deleteDoc} from 'firebase/firestore';


export const globalContext = createContext();

export const useGlobal = () =>{
    const context = useContext(globalContext);
    return context;
}


export const GlobalProvider = ({children}) =>{

    const [userData,setUserData] = useState([]);
    const [user,setUser] = useState(null);
    const [solicitud,setSolicitud] = useState([]);
    const [loading,setIsloading] = useState(true);
    const [countPendiente,setCountPendiente] = useState(0);

    const loginUser = async(email,password) => signInWithEmailAndPassword(auth,email,password);

    const logout = ()=> signOut(auth);

    const login = async(code,passwordUser) => {
        userData.map(({email,password,usercode}) =>{
            if(code===usercode && password===passwordUser){
             loginUser(email,password); 
            }
        })
    } 
    
    const getUser = async() => {
        onSnapshot(collection(db, 'user'), (test) => {
          const docs =[];
          test.forEach( doc =>{
            docs.push({...doc.data(),id:doc.id})
          })
          setUserData(docs);
        });
    };

    const getSolicitud = async() => {
        onSnapshot(collection(db, 'solicitud'), (test) => {
          const docs =[];
          const uidCurrent = auth.currentUser.uid;
          test.forEach( doc =>{
            const {uid} = doc.data();
            if(uid===uidCurrent){
                docs.push({...doc.data(),id:doc.id})
            }
          })
          setSolicitud(docs);
        });
    };

    const getCantSolicitudPendiente = async() => {
        onSnapshot(collection(db, 'solicitud'), (test) => {
          const uidCurrent = auth.currentUser.uid;
          let c = 0;
          test.forEach( doc =>{
            const {uid,estado} = doc.data();
            if(uid===uidCurrent && estado==='pendiente'){
                c++;
            }
          })
          setCountPendiente(c);
        });
    };

    useEffect( ()=> {
        onAuthStateChanged( auth , currentUser =>{
            setUser(currentUser);
            setIsloading(false);
            getUser();
            if(auth.currentUser!==null){
                getSolicitud();
            }
        });
    },[auth]);

    return (
        <globalContext.Provider
            value ={{
                user,
                login,
                logout,
                loading,
                solicitud,
                countPendiente
            }}
        >
            {children}
        </globalContext.Provider>
    )
}