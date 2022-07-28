import * as React from "react";
import { Route, Routes, NavLink, Link, } from "react-router-dom";
import LoginPage from "./paginas/LoginPage";

function App() {
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
              <NavLink className="nav-link" to="/app/login">Login 🔒</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route path='/app/' element={<><h1>Page Home</h1></>} />
          <Route path='/app/about' element={<><h1>Page about</h1></>} />
          <Route path='/app/contact' element={<><h1>Page contact</h1></>} />
          <Route path='/app/login' element={<LoginPage />} />
        </Routes>
      </div>
    </header>
  </>);
}

// function RequireAuth({ children }) {
//   let location = useLocation();
//   if (false) {
//     return <Navigate to="/app/contact" state={{ from: location }} replace />;
//   }
//   return children;
// }

export default App;