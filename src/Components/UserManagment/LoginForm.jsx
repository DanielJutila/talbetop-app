import React, { useEffect, useState } from 'react';
import { login, signUp } from '../../stores/usersPB';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const authData = await login(email, password);
        } catch (error) {
            console.error('Failed to log in:', error);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userData = await signUp(email, password);
        } catch (error) {
            console.error('Failed to sign up:', error);
        }
    };

    return (
        <form>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="button" onClick={handleSignUp}>Sign Up</button>
        </form>
    );
};

export default LoginForm;