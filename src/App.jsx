import {FirebaseAppProvider} from 'reactfire';
import { Route,Routes,Navigate } from 'react-router-dom';

/*************************** BACK - END *********************/
import {FirebaseConfig} from './backend/FirebaseConfig';
import { GlobalProvider } from './backend/context/GlobalContext';
import {ProtectedRouteApp} from '../src/backend/ProtectedRouteApp';
import {ProtectedRoute} from '../src/backend/ProtectedRoute';
import { Page404 } from './backend/Page404';

/*************************** FRONT - END *********************/
import { Login } from './frontend/Login';
import {ResetPassword} from './frontend/ResetPassword';
import {VerifyEmail} from './frontend/VerifyEmail'; 
import {CardList} from './frontend/CardList';
import { Heading } from './frontend/Heading';
import { LetterRequest } from './frontend/LetterRequest';
import { Acept } from './frontend/Acept';
import { CheckAcepted} from './frontend/CheckAcepted';
import {Carta} from './frontend/Carta';

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
                                <LetterRequest/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path="/404" 
                        element={
                            <Page404/>
                        }
                    />

                    <Route path="*" 
                        element={
                            <Navigate replace to="/404"/>
                        } 
                    />

                    <Route 
                        path = '/home/redirect-acept'
                        element={
                            <ProtectedRoute>
                                <Acept/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path = '/home/redirect-view-control'
                        element={
                            <ProtectedRoute>
                                <CheckAcepted/>
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path = '/home/viewcarta'
                        element={
                            <ProtectedRoute>
                                <Carta/>
                            </ProtectedRoute>
                        }
                    />


                    </Routes>
                </GlobalProvider>
            </FirebaseAppProvider>
        </>
    );
}