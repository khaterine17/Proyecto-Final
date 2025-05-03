import React, { useState, useEffect } from 'react';

const ItemForm = ({ onSave, editingItem }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: editingItem?.id, name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del ítem"
        required
      />
      <button type="submit">{editingItem ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default ItemForm;
