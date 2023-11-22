import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from '../../auth.jsx';
import Input from '../../Input/Input.jsx';

import './LoginPage.css';

export default function LoginPage() {
    const navigate = useNavigate();
    const auth = AuthConsumer();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login(username, password).then((res) => {
            navigate('/');
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        navigate('/register');
    };

    return (
        <div className='login'>
            <h2>Fazer login</h2>
            <form onSubmit={handleLogin}>
                <Input
                    type='text'
                    id='username'
                    labelName='Usuário'
                    value={username}
                    required={true}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                    type='password'
                    id='password'
                    labelName='Senha'
                    value={password}
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Entrar</button>

                <button onClick={handleRegister}>Registrar</button>
            </form>
        </div>
    );
}
