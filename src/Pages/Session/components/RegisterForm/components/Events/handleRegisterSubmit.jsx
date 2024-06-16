
import { auth, db } from "../../../../../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const handleRegisterSubmit = async (data, navegar) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.pass);
        const user = userCredential.user;

        // Guardar información adicional en Firestore
        await setDoc(doc(db, 'usuarios', user.uid), {
            name: data.name,
            lastname: data.lastname,
            birthDate: data.birthDate,
            email: data.email
        });
        //alert usuario registrado
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
            text: 'El usuario ha sido registrado exitosamente.'
        });
        //redireccionar al login
        navegar('/login', { state: { email: user.email } });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al registrar el usuario. Por favor intente nuevamente'
        });
        console.error('Error al registrar el usuario', error);
    }
};