import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from '../../auth.jsx';
import Input from '../../Input/Input.jsx';

import './RegisterPage.css';

export default function RegisterPage() {
    const navigate = useNavigate();
    const auth = AuthConsumer();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('auth login', auth);
        console.log('auth username, password', username, password);

        const registerUser = async (data) => {
            const response = await fetch(`http://localhost:3000/usuarios`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const newUser = await response.json();

            console.log(newUser);
        };

        console.log(username, password, weight, height, age, gender);

        if (username && password && weight && height && age && gender) {
            registerUser({
                usuario: username,
                senha: password,
                peso: weight,
                altura: height,
                idade: age,
                sexo: gender,
            });

            // Login and redirect to home after register
            auth.login(username, password).then(() => navigate('/'));
        }
    };

    return (
        <div className='register'>
            <h1>Cadastro de usuário</h1>
            <form onSubmit={handleSubmit}>
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

                <Input
                    type='number'
                    id='weight'
                    labelName='Peso'
                    value={weight}
                    required={true}
                    onChange={(e) => setWeight(e.target.value)}
                />

                <Input
                    type='number'
                    id='height'
                    labelName='Altura'
                    value={height}
                    minLength={1}
                    required={true}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <div className='input-line'>
                    <label htmlFor='gender'>Sexo</label>

                    <select
                        name='gender'
                        id='gender'
                        value={gender}
                        defaultValue={'M'}
                        onChange={(e) => setGender(e.target.value)}>
                        <option value='M'>Masculino</option>
                        <option value='F'>Feminino</option>
                    </select>
                </div>

                <Input
                    type='number'
                    id='age'
                    labelName='Idade'
                    value={age}
                    minLength={1}
                    required={true}
                    onChange={(e) => setAge(e.target.value)}
                />

                <button type='submit'>Salvar</button>
                <button onClick={() => navigate('/')}>Voltar</button>
            </form>
        </div>
    );
}
