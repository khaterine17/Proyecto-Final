import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros.jsx';
import Contacto from './Contacto.jsx';
import Venta from './Venta.jsx';
import Login from './Login.jsx';    

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

            <nav>
                <Link to="/Venta">
                    <h4>Venta</h4>
                </Link>
            </nav>

            <Routes>
                <Route path="/Venta" element={<Venta />} />
            </Routes>

            <nav>
                <Link to="/Login">
                    <h4>Login</h4>
                </Link>
            </nav>

            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
            
    );
}

export default App;
