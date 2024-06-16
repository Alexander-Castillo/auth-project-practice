// src/components/RegisterForm/RegisterForm.jsx
import { Link, useNavigate } from "react-router-dom";
import { schema } from "./components/Schema/schemaRegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {handleRegisterSubmit} from './components/Events/handleRegisterSubmit'


export const RegisterForm = () => {
    const navegar = useNavigate();

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div className="home container-fluid">
            <div className="row">
                <div className="col-md-3 bg-danger"></div>
                <div className="text-start col-md-6 align-items-center px-3 pt-5 pb-5 bg-success">
                    <div className="card p-2">
                        <form onSubmit={handleSubmit((data)=>handleRegisterSubmit(data, navegar))} className="needs-validation" noValidate>
                            <div className="mb-3">
                                <h1 className="text-center">
                                    <i className="fa-solid fa-user"></i>
                                </h1>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre:</label>
                                <input type="text" placeholder="Ingresa tus nombres" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" {...register('name')} onBlur={() => trigger('name')} />
                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Apellido:</label>
                                <input type="text" placeholder="Ingresa tus apellidos" className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} id="lastname" {...register('lastname')} onBlur={() => trigger('lastname')} />
                                {errors.lastname && <div className="invalid-feedback">{errors.lastname.message}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento:</label>
                                <input type="date" className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`} id="birthDate" {...register('birthDate')} onBlur={() => trigger('birthDate')} />
                                {errors.birthDate && <div className="invalid-feedback">{errors.birthDate.message}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" placeholder="correo@ejemplo.ejemplo" {...register("email")} onBlur={() => trigger("email")} />
                                {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pass" className="form-label">Contraseña:</label>
                                <input type="password" className={`form-control ${errors.pass ? "is-invalid" : ""}`} id="pass" {...register("pass")} onBlur={() => trigger("pass")} />
                                {errors.pass && (<div className="invalid-feedback">{errors.pass.message}</div>)}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPass" className="form-label">Confirma tu contraseña:</label>
                                <input type="password" className={`form-control ${errors.confirmPass ? "is-invalid" : ""}`} id="confirmPass" {...register("confirmPass")} onBlur={() => trigger("confirmPass")} />
                                {errors.confirmPass && (<div className="invalid-feedback">{errors.confirmPass.message}</div>)}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <Link to="/login" className="btn btn-success ms-3">
                                Ir al Login
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="col-md-3 bg-danger"></div>
            </div>
        </div>
    );
};
