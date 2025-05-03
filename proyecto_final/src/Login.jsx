import React, { useState } from 'react';

const Login = () => {
    // Estados para login
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [loginError, setLoginError] = useState('');

    // Estados para registro
    const [registerData, setRegisterData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirmPassword: ''
    });
    const [registerErrors, setRegisterErrors] = useState({});
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    // Manejadores para login
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // OBSERVAR MAS ADELANTE KVM 2025-05-02
        if (loginData.username === 'admin' && loginData.password === '1234') {
            alert('Inicio de sesión exitoso');
        } else {
            setLoginError('Usuario o contraseña incorrectos');
        }
    };

    // Manejadores para registro
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    // AQUI CREO QUE VA LO DE ACEPTACION CON EMAIL KVM 2025-05-02
    const validateRegister = () => {
        const newErrors = {};
        if (!registerData.nombre.trim()) newErrors.nombre = 'Nombre es requerido';
        if (!registerData.apellido.trim()) newErrors.apellido = 'Apellido es requerido';
        if (!registerData.email.trim()) {
            newErrors.email = 'Email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
            newErrors.email = 'Email no válido';
        }
        if (!registerData.telefono.trim()) newErrors.telefono = 'Teléfono es requerido';
        if (!registerData.password) {
            newErrors.password = 'Contraseña es requerida';
        } else if (registerData.password.length < 6) {
            newErrors.password = 'Mínimo 6 caracteres';
        }
        if (registerData.password !== registerData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        setRegisterErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (validateRegister()) {
            console.log('Datos de registro:', registerData);
            setRegisterSuccess(true);
            setTimeout(() => {
                setRegisterData({
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    password: '',
                    confirmPassword: ''
                });
                setRegisterSuccess(false);
            }, 3000);
        }
    };

    return (
        <div style={styles.container}>
            {/* Formulario de Login */}
            <form onSubmit={handleLoginSubmit} style={styles.form}>
                <h2 style={styles.title}>Iniciar Sesión</h2>
                <div style={styles.formGroup}>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleLoginChange}
                        style={styles.input}
                        placeholder="Usuario"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        style={styles.input}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                {loginError && <p style={styles.errorText}>{loginError}</p>}
                <button type="submit" style={styles.loginButton}>Entrar</button>

                <div style={styles.toggleForm}>
                    <p style={styles.toggleText}>
                        ¿No tienes cuenta?
                        <button
                            type="button"
                            style={styles.toggleButton}
                            onClick={() => setShowRegister(!showRegister)}
                        >
                            {showRegister ? 'Iniciar Sesión' : 'Regístrate'}
                        </button>
                    </p>
                </div>
            </form>

            {/* Formulario de Registro (se muestra alternativamente) */}
            {showRegister && (
                <form onSubmit={handleRegisterSubmit} style={{ ...styles.form, marginTop: '20px' }}>
                    <h2 style={styles.title}>Registro de Nueva Cuenta</h2>

                    <div style={styles.formGroup}>
                        <input
                            type="text"
                            name="nombre"
                            value={registerData.nombre}
                            onChange={handleRegisterChange}
                            style={styles.input}
                            placeholder="Nombre"
                        />
                        {registerErrors.nombre && <span style={styles.errorText}>{registerErrors.nombre}</span>}
                    </div>

                    <div style={styles.formGroup}>
                        <input
                            type="text"
                            name="apellido"
                            value={registerData.apellido}
                            onChange={handleRegisterChange}
                            style={styles.input}
                            placeholder="Apellido"
                        />
                        {registerErrors.apellido && <span style={styles.errorText}>{registerErrors.apellido}</span>}
                    </div>

                    <div style={styles.formGroup}>
                        <input
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            style={styles.input}
                            placeholder="Email"
                        />
                        {registerErrors.email && <span style={styles.errorText}>{registerErrors.email}</span>}
                    </div>

                    <div style={styles.formGroup}>
                        <input
                            type="tel"
                            name="telefono"
                            value={registerData.telefono}
                            onChange={handleRegisterChange}
                            style={styles.input}
                            placeholder="Teléfono"
                        />
                        {registerErrors.telefono && <span style={styles.errorText}>{registerErrors.telefono}</span>}
                    </div>

                    <div style={styles.formGroup}>
                        <input
                            type="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            style={styles.input}
                            placeholder="Contraseña (mínimo 6 caracteres)"
                        />
                        {registerErrors.password && <span style={styles.errorText}>{registerErrors.password}</span>}
                    </div>

                    <div style={styles.formGroup}>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={registerData.confirmPassword}
                            onChange={handleRegisterChange}
                            style={styles.input}
                            placeholder="Confirmar Contraseña"
                        />
                        {registerErrors.confirmPassword && <span style={styles.errorText}>{registerErrors.confirmPassword}</span>}
                    </div>

                    <button type="submit" style={styles.registerButton}>Registrarse</button>

                    {registerSuccess && (
                        <div style={styles.successMessage}>
                            ¡Registro exitoso! Redirigiendo...
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

// DISENO DE LA PAGINA DE LOGIN KVM 2025-05-02
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f0f2f5',
        padding: '20px'
    },
    form: {
        background: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
    },
    title: {
        textAlign: 'center',
        marginBottom: '25px',
        color: '#333'
    },
    formGroup: {
        marginBottom: '15px'
    },
    input: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '16px',
        boxSizing: 'border-box'
    },
    loginButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#1877f2',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '10px'
    },
    registerButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#42b72a',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '10px'
    },
    errorText: {
        color: '#ff3333',
        fontSize: '12px',
        marginTop: '5px',
        display: 'block'
    },
    successMessage: {
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '10px',
        borderRadius: '4px',
        marginTop: '15px',
        textAlign: 'center',
        fontSize: '14px'
    },
    toggleForm: {
        textAlign: 'center',
        marginTop: '15px',
        paddingTop: '15px',
        borderTop: '1px solid #eee'
    },
    toggleText: {
        color: '#666',
        fontSize: '14px'
    },
    toggleButton: {
        background: 'none',
        border: 'none',
        color: '#1877f2',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '5px',
        padding: '0'
    }
};

export default Login;