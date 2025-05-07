import React, { useState } from 'react';
import axios from 'axios';
import './AgregarProductos.css';

function AgregarProductos() {
  // Estado inicial del producto basado en la estructura de tu tabla
  const [producto, setProducto] = useState({
    nombre_producto: '',
    descripcion_producto: '',
    marca_producto: '',
    precio_producto: '',
    stock_producto: ''
    // creado_en se generará automáticamente en la base de datos
  });
  
  // Estados para mensajes de éxito o error
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje('');
    setError('');
    
    try {
      // Ajusta la URL a tu endpoint de API
      const response = await axios.post('http://localhost:5173/productos', producto);
      
      setMensaje('Producto agregado correctamente');
      // Limpia el formulario después de agregar exitosamente
      setProducto({
        nombre_producto: '',
        descripcion_producto: '',
        marca_producto: '',
        precio_producto: '',
        stock_producto: ''
      });
      console.log('Producto agregado:', response.data);
    } catch (err) {
      setError('Error al agregar el producto: ' + (err.response?.data?.message || err.message));
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración - Refrielectric Martin Vasquez</h1>
      <div className="admin-card">
        <h2>Agregar Nuevo Producto</h2>
        
        {mensaje && <div className="alert alert-success">{mensaje}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre_producto">Nombre del Producto:</label>
            <input
              type="text"
              id="nombre_producto"
              name="nombre_producto"
              value={producto.nombre_producto}
              onChange={handleChange}
              className="form-control"
              required
              maxLength="100"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="descripcion_producto">Descripción:</label>
            <textarea
              id="descripcion_producto"
              name="descripcion_producto"
              value={producto.descripcion_producto}
              onChange={handleChange}
              className="form-control"
              required
              rows="4"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="marca_producto">Marca:</label>
            <input
              type="text"
              id="marca_producto"
              name="marca_producto"
              value={producto.marca_producto}
              onChange={handleChange}
              className="form-control"
              required
              maxLength="100"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="precio_producto">Precio:</label>
            <input
              type="number"
              id="precio_producto"
              name="precio_producto"
              value={producto.precio_producto}
              onChange={handleChange}
              className="form-control"
              step="0.01"
              min="0"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="stock_producto">Stock:</label>
            <input
              type="number"
              id="stock_producto"
              name="stock_producto"
              value={producto.stock_producto}
              onChange={handleChange}
              className="form-control"
              min="0"
              required
            />
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Agregando...' : 'Agregar Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarProductos;