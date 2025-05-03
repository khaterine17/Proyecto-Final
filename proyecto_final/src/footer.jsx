import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
        <p>📞 +52 123 456 7890 | ✉️ refrielectric@gmail.com</p>
        <p>&copy; 2024 Refrigeración Profesional. Todos los derechos reservados.</p>

      </div>
      <div className="footer-left">
        <img src="/img/logoRMV.jpg" alt="Refrielectric" />
        <span>Refrielectric</span>
      </div>
    </footer>
  );
}

export default Footer;
