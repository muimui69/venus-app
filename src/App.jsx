import {FirebaseAppProvider} from 'reactfire';
import { Route,Routes } from 'react-router-dom';

/*************************** BACK - END *********************/
import {FirebaseConfig} from './backend/FirebaseConfig';
import { GlobalProvider } from './backend/context/GlobalContext';
import {ProtectedRouteApp} from '../src/backend/ProtectedRouteApp';
import {ProtectedRoute} from '../src/backend/ProtectedRoute';

/*************************** FRONT - END *********************/
import { Login } from './frontend/Login';
import { Home } from './frontend/Home';
import {ResetPassword} from './frontend/ResetPassword';
import {VerifyEmail} from './frontend/VerifyEmail'; 
import {CardList} from './frontend/CardList';

export const App =()=>{
    return (
        <>
            <FirebaseAppProvider firebaseConfig={FirebaseConfig}>
                <GlobalProvider>
                    <Routes>
                    
                    <Route 
                        path = '/' 
                        element={
                            <ProtectedRouteApp>
                                <Login/>
                            </ProtectedRouteApp>
                        }
                    />

                    <Route 
                        path = '/home' 
                        element={
                            <ProtectedRoute>
                                <Home/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path = '/verify-user-email/reset-password'
                        element={
                            <ResetPassword/>
                        }
                    />

                    <Route 
                        path = '/verify-user-email'
                        element={
                            <VerifyEmail/>
                        }
                    />

                    <Route 
                        path = '/home/cardlist'
                        element={
                            <CardList/>
                        }
                    />

                    </Routes>
                </GlobalProvider>
            </FirebaseAppProvider>
        </>
    );
}