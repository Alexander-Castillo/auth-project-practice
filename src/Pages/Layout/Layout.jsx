
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { Navbar } from "./Navbar/Navbar"
import Swal from 'sweetalert2'


// eslint-disable-next-line react/prop-types
export const Layout =({children})=>{

    const navegar = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas cerrar sesión?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    navegar('/login');
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error al cerrar la sesión. Por favor, inténtelo de nuevo.'
                    });
                    console.log('Error al cerrar la sesión', error);
                });
            }
        });
    };
    return (
        <>
        <Navbar handleLogout={handleLogout}/>
        <main>{ children }</main>
        </>
    )
}