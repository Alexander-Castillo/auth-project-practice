{/** yup.date().min(yup.date().substract(15,'years'), 'Debes tener al menos 15 años para crear una cuenta').required() */}
{/** */}
import * as yup from "yup";

{/** calcular fecha minima permitida */}
const getMinDate = ()=> {
    const heute = new Date();
    const minimo = new Date(heute.getFullYear() - 15, heute.getMonth(), heute.getDate());
    return minimo;
}
export const schema = yup.object().shape({
    name: yup.string().required('Ingresar el nombre es obligatorio'),
    lastname: yup.string().required('Es obligatorio ingresar tus apellidos'),
    birthDate: yup.date().required('La fecha de nacimiento es obligatoria.').test(
        'edad',
        'Debes tener al menos 15 años de edad para crear una cuenta',
        (value)=>{
            return value <= getMinDate();
        }
    ),
    email: yup.string().email("Correo no valido").required("El correo es obligatorio."),
    pass: yup.string().min(8, "La contraseña debe tener minimo 8 caracteres").required("Contraseña es obligatorio"),
    confirmPass: yup.string().oneOf([yup.ref("pass"), null], "las contraseñas deben coincidir").required("La confirmacion de la contraseña es obligatoria"),
});