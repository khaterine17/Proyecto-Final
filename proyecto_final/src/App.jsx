// App.jsx
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros.jsx';
import Contacto from './Contacto.jsx';
import Venta from './Venta.jsx';
import Login from './Login.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías redirigir al usuario o buscar entre los datos existentes
        alert(`Buscando: ${searchQuery}`);
    };
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    🧊 Refrielectric RMV S.R.L
                </div>
                <div className="nav-links">
                    <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    <Link to="/Contacto">Contacto</Link>
                    <Link to="/Venta">Venta</Link>
                    <Link to="/Login">Login</Link>

                    <div className="search-bar">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <button type="submit" style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer'
                            }}>🔍
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Venta" element={<Venta />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Admins" element={<AdminDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
