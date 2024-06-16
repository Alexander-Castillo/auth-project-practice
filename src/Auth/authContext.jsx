import {createContext, useContext,useState,useEffect} from "react";
import { auth } from "../firebase/config";
{/** AuthContext.jsx  Crear un contexto de autenticación para compartir el estado de autenticación del usuario en toda la aplicación.*/}
const AuthContext = createContext();// manejar el estado de auth global
export const useAuth = () => useContext(AuthContext);
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);//usuario actual
    useEffect(()=>{
        const fuera = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return fuera;
    },[]);
    return(
        <AuthContext.Provider value={({currentUser})}>
            {children}
        </AuthContext.Provider>
    );
};


