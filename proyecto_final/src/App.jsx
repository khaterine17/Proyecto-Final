import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros.jsx';
<<<<<<< HEAD
import Contacto from './Contacto.jsx';
import Venta from './Venta.jsx';
=======
import Contacto from './contacto.jsx';
import Login from './Login.jsx';
>>>>>>> e8f61fe5dcbec7ebfe42973245dcea5b8ef6659e

function App() {
    return (
        <div>
            <nav>
                <Link to="/SobreNosotros">
                    <h4>Sobre Nosotros</h4>
                </Link>
            </nav>

            <Routes>
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
            </Routes>

            <nav>
                <Link to="/Contacto">
                    <h4>Contacto</h4>
                </Link>
            </nav>

            <Routes>
                <Route path="/Contacto" element={<Contacto />} />
            </Routes>
<<<<<<< HEAD

            <nav>
                <Link to="/Venta">
                    <h4>Venta</h4>
=======
            <nav>
                <Link to="/Login">
                    <h4>Login</h4>
>>>>>>> e8f61fe5dcbec7ebfe42973245dcea5b8ef6659e
                </Link>
            </nav>

            <Routes>
<<<<<<< HEAD
                <Route path="/Venta" element={<Venta />} />
=======
                <Route path="/Login" element={<Login />} />
>>>>>>> e8f61fe5dcbec7ebfe42973245dcea5b8ef6659e
            </Routes>
        </div>
    );
}

export default App;
