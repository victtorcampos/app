import React from 'react';
import style from './LoginPage.module.css'

const LoginPage = () => {

    return (
        <main className={`w-100 m-auto ${style.formLogin}`}>
            <form>
                <h1 className="h3 mb-3 fw-normal">Formulario de Login</h1>
                <div className="form-floating" style={{ marginBottom: "12px" }}>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Endereço de Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Senha</label>
                </div>
                <button className={`w-100 btn btn-lg btn-primary ${style.buttonLogin}`} type="submit">Entrar</button>
            </form>
        </main>
    );
};

export default LoginPage;