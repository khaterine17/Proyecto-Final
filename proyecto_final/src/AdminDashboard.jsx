import React, { useState, useEffect } from 'react';
import ItemList from '../src/components/ItemList';
import ItemForm from '../src/components/ItemForm';
import { getItems, deleteItem, createItem, updateItem } from '../src/Services/api';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  const handleSave = async (item) => {
    if (item.id) {
      await updateItem(item.id, item);
    } else {
      await createItem(item);
    }
    setEditingItem(null);
    loadItems();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  return (
    <div>
      <h1>Dashboard de Administrador</h1>
      <ItemForm onSave={handleSave} editingItem={editingItem} />
      <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default AdminDashboard;
