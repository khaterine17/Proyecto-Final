import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros';

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
    </div>
  );
}

export default App;
