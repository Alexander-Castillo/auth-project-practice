import * as yup from 'yup'

export const schema = yup.object().shape({
    email: yup.string().email('Este correo no es valido.').required('Es obligatorio que ingrese un correo.'),
    pass: yup.string().min(8, 'La contraseña debe tener minimo 8 caracteres').required('Escribir la contraseña es obligatorio')
})