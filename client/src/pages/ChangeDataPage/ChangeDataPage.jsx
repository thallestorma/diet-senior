import { useState } from 'react';
import Input from '../../Input/Input.jsx';
import { AuthConsumer } from '../../auth.jsx';

import { useNavigate } from 'react-router-dom';

import './ChangeDataPage.css';

export default function ChangeDataPage() {
    const auth = AuthConsumer();

    const userId = auth.auth.usuario.id;
    const username = auth.auth.usuario.usuario;

    const [password, setPassword] = useState('');
    const [weight, setWeight] = useState(auth.auth.usuario.peso);
    const [height, setHeight] = useState(auth.auth.usuario.altura);
    const [gender, setGender] = useState(auth.auth.usuario.sexo);
    const [age, setAge] = useState(auth.auth.usuario.idade);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const changeUserData = async (data) => {
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/usuarios/${userId}`,
                {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            const newUserData = await response.json();

            return newUserData;
        };

        if (username && password && weight && height && age && gender) {
            changeUserData({
                usuario: username,
                senha: password,
                peso: weight,
                altura: height,
                idade: age,
                sexo: gender,
            });

            // Update session user data
            auth.login(username, password).then(() => navigate('/'));
        }
    };

    return (
        <div className='change-data'>
            <h3>Alterar dados</h3>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    id='username'
                    labelName='Usuário'
                    value={username}
                    required={true}
                    disabled={true}
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
                    step={0.1}
                    onChange={(e) => setWeight(e.target.value)}
                />

                <Input
                    type='number'
                    id='height'
                    labelName='Altura'
                    value={height}
                    required={true}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <div className='input-line'>
                    <label htmlFor='gender'>Sexo</label>

                    <select
                        name='gender'
                        id='gender'
                        value={gender}
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
                    required={true}
                    onChange={(e) => setAge(e.target.value)}
                />

                <button type='submit'>Salvar</button>
            </form>
        </div>
    );
}
