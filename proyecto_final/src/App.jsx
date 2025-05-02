// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros.jsx';
import Contacto from './Contacto.jsx';
import Venta from './Venta.jsx';
import Login from './Login.jsx';    
import './App.css'; 

function App() {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    🧊 Refrielectric
                </div>
                <div className="nav-links">
                    <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    <Link to="/Contacto">Contacto</Link>
                    <Link to="/Venta">Venta</Link>
                    <Link to="/Login">Login</Link>
                </div>
            </div>

            <Routes>
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Venta" element={<Venta />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
