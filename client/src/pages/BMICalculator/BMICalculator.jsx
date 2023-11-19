import { useState } from 'react';

import './BMICalculator.css';

export default function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [message, setMessage] = useState('');

    const handleClickCalculator = () => {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        console.log('bmi', bmi);

        let message = '';

        if (bmi < 18.5) {
            message = 'Abaixo do normal';
        } else if (bmi >= 18.5 && bmi < 25) {
            message = 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            message = 'Sobrepeso';
        } else if (bmi >= 30 && bmi < 35) {
            message = 'Obesidade grau I';
        } else if (bmi >= 35 && bmi < 40) {
            message = 'Obesidade grau II';
        } else {
            message = 'Obesidade grau III';
        }

        setMessage(message);
    };

    return (
        <div className='calculator'>
            <div className='input-line'>
                <label htmlFor='weight'>Peso (em kg)</label>
                <input
                    type='number'
                    id='weight'
                    name='weight'
                    minLength='1'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className='input-line'>
                <label htmlFor='height'>Altura (em cm)</label>

                <input
                    type='number'
                    id='height'
                    name='height'
                    minLength='1'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button onClick={handleClickCalculator}>Calcular</button>

            {message && <h3>Resultado: {message}</h3>}
        </div>
    );
}
