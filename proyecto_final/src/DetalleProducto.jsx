import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const productos = [
  {
    id: 1,
    nombre: "Aire Acondicionado Inverter",
    modelo: "AR12TYHYCWK",
    marca: "Samsung",
    imagen: "/img/contacto2.jpg",
    disponible: true,
    categoria: "AIRE ACONDICIONADO",
    caracteristicas: [
      "Tecnología Inverter para ahorro energético.",
      "Control remoto y Wi-Fi integrado.",
      "Modo de enfriamiento rápido.",
      "Filtro de aire lavable.",
      "Diseño elegante y moderno.",
    ],

  },
  {
    id: 2,
    nombre: "Purificador de Aire",
    modelo: "AX40T3030WM/AZ",
    marca: "Samsung",
    imagen: "/img/contacto1.jpg",
    disponible: false,
    categoria: "PURIFICADORES DE AIRE",
    caracteristicas: [
      "Elimina hasta el 99.97% de polvo de tamaño de 0.3 μm.",
      "Sistema de purificación multicapa AX40T3030WM/AZ.",
      "Mantiene tu aire puro y seguro.",
      "Extrae partículas de polvo grandes.",
      "Filtro de carbón activado elimina gases nocivos.",
      "Filtración HEPA ultrafino limita bacterias.",
    ],
  },
  {
    id: 3,
    nombre: "Refrigerador a Gas",
    modelo: "RG-2000",
    marca: "Whirlpool",
    imagen: "/img/contacto3.jpg",
    disponible: true,
    categoria: "REFRIGERADORES",
    caracteristicas: [
      "Capacidad de 200 litros.",
      "Sistema de refrigeración eficiente.",
      "Diseño compacto y funcional.",
      "Ideal para zonas sin electricidad.",
      "Estante ajustable y compartimentos amplios.",
    ],
  },
];
``

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => navigate("/Venta")}>← Volver</button>
      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ width: "300px", height: "auto" }}
        />
        <div>
          <h2>{producto.nombre}</h2>
          <p><strong>Modelo:</strong> {producto.modelo}</p>
          <p><strong>Marca:</strong> {producto.marca}</p>
          <p><strong>Categoría:</strong> {producto.categoria}</p>
          <p style={{ color: "orange", fontWeight: "bold" }}>
            {producto.disponible
              ? "Disponible en línea"
              : "Sólo disponible en tiendas físicas"}
          </p>
          <h4>Características</h4>
          <ul>
            {producto.caracteristicas.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
