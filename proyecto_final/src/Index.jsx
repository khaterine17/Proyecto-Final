import React from "react";



const Index = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="navbar navbar-light bg-skyblue">
            <img
              src="/images/logomv.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Logo MV"
            />
            <span>Refrielectric Martin Vasquez SRL</span>
            <li>
              <Link to="/ventas">Venta</Link>
            </li>
            <li>
              <Link to="/reparaciones">Reparaciones</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li>
            <img
              src="/images/bienes.png"
              className="logo"
              style={{ height: "50px", marginLeft: "10px" }}
              alt="Bienes"
            />
            <button
              style={{
                background: "none",
                border: "none",
                padding: 0,
                marginLeft: "10px",
              }}
            >
              <Link to="/login">
                <img
                  src="/images/usuario.png"
                  alt="Usuario"
                  style={{ height: "50px", cursor: "pointer" }}
                />
              </Link>
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Index;
