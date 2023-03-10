import {FirebaseAppProvider} from 'reactfire';
import { Route,Routes } from 'react-router-dom';

/*************************** BACK - END *********************/
import {FirebaseConfig} from './backend/FirebaseConfig';
import { GlobalProvider } from './backend/context/GlobalContext';
import {ProtectedRouteApp} from '../src/backend/ProtectedRouteApp';
import {ProtectedRoute} from '../src/backend/ProtectedRoute';

/*************************** FRONT - END *********************/
import { Login } from './frontend/Login';
import {ResetPassword} from './frontend/ResetPassword';
import {VerifyEmail} from './frontend/VerifyEmail'; 
import {CardList} from './frontend/CardList';
import { Heading } from './frontend/Heading';
import { Pdf } from './frontend/Pdf';

export const App =()=>{
    return (
        <>
            <FirebaseAppProvider firebaseConfig={FirebaseConfig}>
                <GlobalProvider>
                    <Heading/>
                    
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
                        path = '/home'
                        element={
                            <ProtectedRoute>
                                 <CardList prop='pendiente'/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path = '/home/listview-aceptado'
                        element={
                            <ProtectedRoute>
                                 <CardList prop='aceptado'/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path = '/home/listview-rechazado'
                        element={
                            <ProtectedRoute>
                              <CardList prop='rechazado'/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path = '/home/pdf-redact'
                        element={
                            <ProtectedRoute>
                              <Pdf/>
                            </ProtectedRoute>
                        }
                    />

                    </Routes>
                </GlobalProvider>
            </FirebaseAppProvider>
        </>
    );
}