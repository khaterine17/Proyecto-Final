import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros.jsx';
import Contacto from './contacto.jsx';

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
        </div>
    );
}

export default App;
