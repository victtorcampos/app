import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, NavLink, Link, Navigate, useLocation, } from "react-router-dom";
import { loadCredential, logOut } from '.';

import LoginPage from "./paginas/LoginPage";

function App() {
  const { user } = useSelector((state) => state.dados);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!user) { dispatch(loadCredential()); }
  }, [dispatch, user]);

  return (<>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <NavLink className="navbar-brand" to="/app" >NavBar</NavLink>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/app" >Home</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/app/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/app/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/app/estoque">{user ? `Estoque 🔓` : `Estoque 🔒`}</NavLink>
            </li>
            <li className="nav-item">
              {user ? <NavLink className="nav-link" to="/app" onClick={() => { dispatch(logOut()) }} >LogOut 🔒</NavLink> : <NavLink className="nav-link" to="/app/login">Login 🔓</NavLink>}
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route path='/app/' element={<><h1>Page Home</h1></>} />
          <Route path='/app/about' element={<><h1>Page about</h1></>} />
          <Route path='/app/contact' element={<><h1>Page contact</h1></>} />
          <Route path='/app/estoque' element={<RequireAuth> <><h1>Page Estoque</h1></></RequireAuth>} />

          <Route path='/app/login' element={<LoginPage />} />

        </Routes>
      </div>
    </header>
  </>);
}

function RequireAuth({ children }) {
  let location = useLocation();
  const { user } = useSelector((state) => state.dados);
  if (!user) {
    return <Navigate to="/app/login" state={{ from: location }} replace />;
  }
  return children;
}

export default App;