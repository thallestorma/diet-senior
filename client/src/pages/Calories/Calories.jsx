import { useEffect, useState } from 'react';
import { AuthConsumer } from '../../auth';
import './Calories.css';
import { useNavigate } from 'react-router-dom';

export default function Calories() {
    const navigate = useNavigate();
    const auth = AuthConsumer();
    const [consumption, setConsumption] = useState(0);
    const totalConsumption = auth.auth.usuario.sexo === 'M' ? 2500 : 2000;
    let progress = (100 * consumption) / totalConsumption;
    const exceedCalories = progress > 100;

    useEffect(() => {
        const getCalories = async () => {
            const response = await fetch(
                `http://localhost:3000/totalCaloriasDiarias/${auth?.auth?.usuario?.id}`,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            );

            const calories = await response.json();
            console.log(calories);

            if (calories?.totalCalorias) {
                setConsumption(calories.totalCalorias);
            }
        };

        getCalories();
    }, []);

    const classes = `${exceedCalories ? 'red' : 'green'}`;
    return (
        <div className='calories'>
            <div className='progress-bar'>
                <div
                    style={{ width: `${progress > 100 ? 100 : progress}%` }}
                    className={classes}>
                    <span>
                        {consumption}/{totalConsumption}
                    </span>
                </div>
            </div>

            <h1>
                Você já consumiu <b>{consumption}</b> de{' '}
                <b>{totalConsumption}</b> calorias diárias
            </h1>

            <button onClick={() => navigate('/')}>Registrar consumo</button>
        </div>
    );
}
