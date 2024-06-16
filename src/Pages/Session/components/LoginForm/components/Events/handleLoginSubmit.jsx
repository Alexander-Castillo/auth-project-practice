import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../../firebase/config";
import Swal from 'sweetalert2'

export const handleLoginSubmit = async (data, navegar) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.pass);
        const user = userCredential.user;
        navegar('/home',{state: {email: user.email}})
    }catch (error) {
        let errorMessage = 'Por favor verifica tu correo y contraseña';
        if (error.code === 'auth/user-not-found') {
            errorMessage = 'Usuario no encontrado. Verifique su correo electrónico.';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Contraseña incorrecta. Intente de nuevo.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Correo electrónico no válido.';
        }

        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: errorMessage
        });

        console.error(error.message);
    }
};