import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemList from '../src/components/ItemList';
import ItemForm from '../src/components/ItemForm';
import { getItems, deleteItem, createItem, updateItem } from '../src/Services/api';
import './Dashboard.css';
import LateralPanel from './components/LateralPanel.jsx';
const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Verificar autenticación al cargar
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/Login');
    } else {
      loadItems();
    }
  }, [navigate]);

  const loadItems = async () => {
    try {
      setIsLoading(true);
      const data = await getItems();
      setItems(data);
    } catch (err) {
      setError('Error al cargar los items');
      console.error('Error loading items:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      loadItems();
    } catch (err) {
      setError('Error al eliminar el item');
      console.error('Error deleting item:', err);
    }
  };

  const handleSave = async (item) => {
    try {
      if (item.id) {
        await updateItem(item.id, item);
      } else {
        await createItem(item);
      }
      setEditingItem(null);
      loadItems();
    } catch (err) {
      setError('Error al guardar los cambios');
      console.error('Error saving item:', err);
    }
  };

  // Función handleEdit que faltaba
  const handleEdit = (item) => {
    setEditingItem(item); // Establece el item que se está editando
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/Login');
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Panel de Administración</h1>
        <button onClick={handleLogout} className="logout-btn">
          Cerrar Sesión
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="admin-content">
        <section className="form-section">
          <h2>{editingItem ? 'Editar Item' : 'Agregar Nuevo Item'}</h2>
          <ItemForm onSave={handleSave} editingItem={editingItem} />
        </section>

        <section className="list-section">
          <h2>Listado de Items</h2>
          {isLoading ? (
            <div className="loading">Cargando...</div>
          ) : (
            <ItemList
              items={items}
              onDelete={handleDelete}
              onEdit={handleEdit} // Pasamos la función handleEdit como prop
            />
          )}
        </section>
      </div>
    </div>

  );
};

export default AdminDashboard;