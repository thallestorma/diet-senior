import { useState } from 'react';

import './BMICalculatorPage.css';

export default function BMICalculatorPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [message, setMessage] = useState('');

    const handleClickCalculator = (e) => {
        e.preventDefault();

        if (weight && height) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

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
        }
    };

    return (
        <div className='calculator'>
            <form onSubmit={handleClickCalculator}>
                <h3>Calculadora de IMC</h3>
                <div className='input-line'>
                    <label htmlFor='weight'>Peso (em kg)</label>
                    <input
                        type='number'
                        id='weight'
                        name='weight'
                        min='1'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>
                <div className='input-line'>
                    <label htmlFor='height'>Altura (em cm)</label>

                    <input
                        type='number'
                        id='height'
                        name='height'
                        min='1'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </div>
                <button>Calcular</button>
            </form>

            {message && <h3>Resultado: {message}</h3>}
        </div>
    );
}
