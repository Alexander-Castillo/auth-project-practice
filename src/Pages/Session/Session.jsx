

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { LoginForm } from './components/LoginForm/LoginForm'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { Layout } from '../Layout/Layout'
import { AuthProvider } from '../../Auth/authContext'
import { ProtectedRoute } from '../../Auth/ProtectedRoute'

export const Session = () => {
    return (
        <>
            <AuthProvider>{/** envuelve la aplicacion proporcionando contexto de auntentificacion */}
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to='/login' />} />
                        <Route path='/login' element={<LoginForm />} />
                        <Route path='/registro' element={<RegisterForm />} />
                        <Route path='/home' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
                        <Route path='/sesion' element={<ProtectedRoute><Layout><Session /></Layout></ProtectedRoute>} />{/** protectedroute envuelve cada componente que solo debe ser accedido por usuarios autenticados */}
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}