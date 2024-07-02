import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logoImage from '../image/logo.png';
import backgroundImage from '../image/login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (error) {
            setError('Email atau password salah. Silakan coba lagi.');
            console.error('Error saat login:', error);
            console.log('State error:', error);
        }
    };

    return (
        <div className='login-page' style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        }}>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className='card shadow-lg' style={{ width: '28rem', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <div className="p-5">
                        <div className="d-flex justify-content-center mb-4">
                            <img src={logoImage} style={{ width: '100px' }} alt="Logo" />
                        </div>
                        <h2 className="text-center mb-5">Login Admin</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3" style={{ borderBottom: '2px solid green' }}>
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control border-0"
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    style={{
                                        borderBottom: '2px solid green',
                                        borderRadius: 0,
                                        backgroundColor: 'transparent',
                                        color: 'black'
                                    }}
                                />
                            </div>
                            <div className="mb-3" style={{ borderBottom: '2px solid green' }}>
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control border-0"
                                    id="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    style={{
                                        borderBottom: '2px solid green',
                                        borderRadius: 0,
                                        backgroundColor: 'transparent',
                                        color: 'black'
                                    }}
                                />
                            </div>
                            {error && <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>{error}</div>}
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
