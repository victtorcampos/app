import * as React from "react";
import { Route, Routes, NavLink, Navigate, useLocation } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem", }}>
          <NavLink style={{ margin: "0 1rem" }} to="/app" className='nav-link-home'>Home</NavLink>
          <NavLink style={{ margin: "0 1rem" }} to="/app/about">About</NavLink>
          <NavLink style={{ margin: "0 1rem" }} to="/app/contact">Contact</NavLink>
          <NavLink style={{ margin: "0 1rem" }} to="/app/login" className='nav-link-login'>Login</NavLink>
        </nav>
        <Routes>
          <Route path='/app/' element={<><h1>Page Home</h1></>} />
          <Route path='/app/about' element={<><h1>Page about</h1></>} />
          <Route path='/app/contact' element={<><h1>Page contact</h1></>} />
          <Route path='/app/login' element={<RequireAuth><h1>Page Login 🔒</h1></RequireAuth>} />
        </Routes>
      </div>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (false) {
    return <Navigate to="/app/contact" state={{ from: location }} replace />;
  }
  return children;
}

export default App;