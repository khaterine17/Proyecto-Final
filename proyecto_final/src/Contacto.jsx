import React from 'react';
import './Contacto.css';

function Contacto() {
    return (
        <section className="info-contacto">
            <h2>Oficina Principal</h2>
            <p className="direccion">Av. 27 de Febrero No. 587, Santo Domingo</p>

            <div className="info-item">
                <i className="fas fa-phone-alt icono"></i>
                <strong>Teléfono:</strong>
                <span>1 (809) 539-8484</span>
            </div>

            <div className="info-item">
                <i className="fab fa-whatsapp icono"></i>
                <strong>WhatsApp:</strong>
                <span>1 (829) 760-4750</span>
            </div>

            <div className="info-item">
                <i className="fas fa-fax icono"></i>
                <strong>Fax:</strong>
                <span>(809) 539-8181</span>
            </div>

            <div className="info-item">
                <i className="fas fa-user icono"></i>
                <strong>Gerente:</strong>
                <span>Rubén Darío</span>
            </div>

            <div className="mapa">
                <iframe
                    title="Ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.750761105168!2d-69.93389168509133!3d18.486820276176452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89c6db5e4e3f%3A0x8e0f8a3ef2a37c3e!2sAv.%2027%20de%20Febrero%2C%20Santo%20Domingo!5e0!3m2!1ses!2sdo!4v1586982393562!5m2!1ses!2sdo"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}

export default Contacto;
