import { Link, useNavigate } from "react-router-dom"
{/**importacion de hook react form */ }
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./components/Schema/SchemaLogin";
import { handleLoginSubmit } from "./components/Events/handleLoginSubmit";

export const LoginForm = () => {
    const navegar = useNavigate();

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(schema)
    }); {/** implementacion de esquema */ }


    




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-md-3 bg-danger"></div>
                    <div className="text-start col-md-6 align-items-center px-3 pt-5 pb-5 bg-success">
                        <div className="card p-2">
                            <form onSubmit={handleSubmit((data)=>handleLoginSubmit(data,navegar))} className="needs-validation" noValidate>
                                <div className="mb-3">
                                    <h1 className="text-center"><i className="fa-solid fa-lock"></i></h1>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" {...register('email')} onBlur={() => trigger('email')} />
                                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pass" className="form-label">Contraseña:</label>
                                    <input type="password" className={`form-control ${errors.pass ? 'is-invalid' : ''}`} id="pass" {...register('pass')} onBlur={() => trigger('pass')} />
                                    {errors.pass && <div className="invalid-feedback">{errors.pass.message}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={'/registro'} className="btn btn-success ms-3">Registrate</Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 bg-danger"></div>
                </div>
            </div>
        </>
    )
}