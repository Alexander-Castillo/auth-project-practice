import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children})=>{
    const {currentUser} = useAuth();

    if (!currentUser) {
        return <Navigate to='/login' />
    }
    return children;
}