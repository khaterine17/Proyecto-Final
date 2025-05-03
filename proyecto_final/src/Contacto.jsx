import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        mensaje: ''
    });

    // FUNCIONES PARA MAS ADELANTE DE ENVIAR FORMULARIO KVM
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };
    // ----------------------------------

    return (
        <section className="contacto-container">
            {/* Columna izquierda - Formulario (aquí iría tu foto) */}
            <div className="columna-izquierda">
                <div className="formulario-contacto">
                    <h3>Formulario de Contacto</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={!!formData.nombre}
                                    readOnly
                                    className="form-checkbox"
                                />
                                <span>NOMBRE</span>
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={!!formData.apellido}
                                    readOnly
                                    className="form-checkbox"
                                />
                                <span>APELLIDO</span>
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={!!formData.telefono}
                                    readOnly
                                    className="form-checkbox"
                                />
                                <span>TELÉFONO</span>
                            </label>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={!!formData.email}
                                    readOnly
                                    className="form-checkbox"
                                />
                                <span>E-MAIL</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={!!formData.mensaje}
                                    readOnly
                                    className="form-checkbox"
                                />
                                <span>¿EN QUÉ SE LE PUEDE SERVIR? / ¿QUÉ SERVICIO SOLICITA?</span>
                            </label>
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                className="form-textarea"
                                required
                            />
                        </div>

                        <button type="submit" className="form-submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Columna derecha - Información de contacto */}
            <div className="columna-derecha">
                <div className="info-contacto">
                    <h2>Oficina Principal</h2>
                    <p className="direccion">Estancia Nueva Puñal Calle Principal, Santiago</p>

                    <div className="info-item">
                        <i className="fas fa-phone-alt icono"></i>
                        <strong>Teléfono:</strong>
                        <span>1 (809) 337-0009</span>
                    </div>

                    <div className="info-item">
                        <i className="fab fa-whatsapp icono"></i>
                        <strong>WhatsApp:</strong>
                        <span>1 (809) 401-1312</span>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-user icono"></i>
                        <strong>Gerente:</strong>
                        <span>Martin Vásquez</span>
                    </div>

                    <div className="mapa" style={{ width: '100%', height: '450px' }}>
                        <iframe
                            title="Ubicación Guayabal"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.934430934122!2d-70.6497546!3d19.3719916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1ce6d8af8f291%3A0xd9d53a9fb3d1bcb0!2sGuayabal%2051000!5e0!3m2!1ses!2sdo!4v1723746036089!5m2!1ses!2sdo"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;