import React, { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import SobreNosotros from './SobreNosotros.jsx';
import Contacto from './Contacto.jsx';
import Venta from './Venta.jsx';
import DetalleProducto from './DetalleProducto.jsx';
import Login from './Login.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import './App.css';
import Footer from './footer.jsx';
import { FaUserAlt } from "react-icons/fa";

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('adminToken');
    return isAuthenticated ? children : <Navigate to="/Login" replace />;
};

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Buscando: ${searchQuery}`);
    };

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/Login');
    };

    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    🧊 Refrielectric RMV S.R.L
                </div>
                <div className="nav-links">
                   <Link to="/Venta">Venta</Link>
                   <Link to="/Contacto">Contacto</Link>
                    <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    {localStorage.getItem('adminToken') ? (
                        <>
                            <Link to="/Admins">Dashboard</Link>
                            <button onClick={handleLogout} style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                font: 'inherit',
                                padding: '0'
                            }}>
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link to="/Login"> <FaUserAlt /> </Link>
                    )}

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
                            }}>🔍</button>
                        </form>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/SobreNosotros" element={<SobreNosotros />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Venta" element={<Venta />} />
                <Route path="/detalle/:id" element={<DetalleProducto />} />
                <Route path="/Login" element={<Login />} />
                <Route
                    path="/Admins"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/SobreNosotros" replace />} />
            </Routes>
            <Footer />
        </div>
        
    );
}

export default App;