import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login as DispatchSetLogin } from '..';
import style from './LoginPage.module.css'

const LoginPage = () => {
    const { user, erro } = useSelector((state) => state.dados);
    const [login, setLogin] = useState({ email: undefined, password: undefined });
    const dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/app";
    useEffect(() => {
        if (user) { navigate(from, { replace: true }) }
    }, [user, login, erro, navigate, from]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(DispatchSetLogin(login));
    }

    function handleChange(event) {
        setLogin(prevSate => ({ ...prevSate, [event.target.name]: event.target.value }))
    }

    return (

        <main className={`w-100 m-auto ${style.formLogin}`}>

            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Formulario de Login</h1>
                <div className="form-floating" style={{ marginBottom: "12px" }}>
                    <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} value={undefined} />
                    <label htmlFor="floatingInput">Endereço de Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} value={undefined} />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
                {erro ?

                    <div className="mb-3">
                        {console.log('errro')}
                        <div className="" style={{ color: "#dc3545", fontSize: '.875em', marginTop: '0.25rem', width: '100%' }}>{erro.message}</div>
                    </div> : <></>}
                <button className={`w-100 btn btn-lg btn-primary ${style.buttonLogin}`} type="submit">Entrar</button>
            </form>
        </main>
    );
};

export default LoginPage;