import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Importante
import "./Venta.css";

const productos = [
  {
    id: 1,
    nombre: "Aire Acondicionado Inverter",
    precio: "$499.99",
    imagen: "/img/contacto1.jpg",
  },
  {
    id: 2,
    nombre: "Purificador de Aire",
    precio: "$149.99",
    imagen: "/img/contacto1.jpg",
  },
  {
    id: 3,
    nombre: "Refrigerador a Gas",
    precio: "$899.99",
    imagen: "/img/contacto1.jpg",
  },
  {
    id: 4,
    nombre: "Ventilador de Techo",
    precio: "$79.99",
    imagen: "/img/contacto1.jpg",
  },
  {
    id: 5,
    nombre: "Deshumidificador",
    precio: "$199.99",
    imagen: "/img/contacto1.jpg",
  },
  {
    id: 6,
    nombre: "Calentador de Agua",
    precio: "$299.99",
    imagen: "/img/contacto1.jpg",
  },
];

function Venta() {
  const navigate = useNavigate(); // <-- Necesario para redirección

  return (
    <div className="venta-container">
      <h2>Venta</h2>
      <p>¡Bienvenido a nuestra sección de venta!</p>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              onError={(e) => (e.target.src = "/img/no-image.png")}
            />
            <h3>{producto.nombre}</h3>
            <p className="precio">{producto.precio}</p>
            <div className="botones">
              <button
                className="btn-detalles"
                onClick={() => navigate(`/detalle/${producto.id}`)}
              >
                Ver Detalles
              </button>
              <button className="btn-carrito">Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Venta;
