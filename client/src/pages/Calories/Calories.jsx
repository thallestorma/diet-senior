import './Calories.css';

export default function Calories() {
    const consumption = 2000;
    const totalConsumption = 2400;
    const progress = (100 * consumption) / totalConsumption;

    return (
        <div className='calories'>
            <div className='progress-bar'>
                <div style={{ width: `${progress}%` }}>
                    <span>2000/2400</span>
                </div>
            </div>

            <h1>
                Você já consumiu <b>{consumption}</b> de{' '}
                <b>{totalConsumption}</b> calorias diárias
            </h1>

            <button>Registrar consumo</button>
        </div>
    );
}
