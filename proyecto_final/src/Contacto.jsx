import React from 'react'

function Contacto() {
    return (
        <div>
            <main>

                <section id="contacto">
                    <h2>Contacto</h2>
                    <form id="contact-form">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="phone">Teléfono:</label>
                        <input type="tel" id="phone" name="phone" />

                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </section>
            </main>

        </div>
    );
};

export default Contacto
