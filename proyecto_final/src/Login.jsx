import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === '1234') {
            alert('Inicio de sesión exitoso');
            // Redirigir o cambiar estado según tu router
            // Por ejemplo, usando react-router-dom:
            // navigate("/dashboard");
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Iniciar Sesión</h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Entrar</button>
                {error && <p style={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f2f5',
    },
    form: {
        background: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '6px',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#1877f2',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    }
};

export default Login;
