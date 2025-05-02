import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros';

function App() {
  return (
    <div>
      <nav>
        <Link to="/SobreNosotros">
          <button>Sobre Nosotros</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
      </Routes>
    </div>
  );
}

export default App;
