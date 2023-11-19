import { NavLink } from 'react-router-dom';

import './Menu.css';

export default function Menu() {
    const addIsActive = ({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : '';

    return (
        <nav className='menu'>
            <ul>
                <li>
                    <NavLink className={addIsActive} to='/'>
                        Início
                    </NavLink>
                </li>
                <li>
                    <NavLink className={addIsActive} to='calories'>
                        Calorias
                    </NavLink>
                </li>
                <li>
                    <NavLink className={addIsActive} to='food-table'>
                        Tabela de alimentos
                    </NavLink>
                </li>
                <li>
                    <NavLink className={addIsActive} to='calculator'>
                        Calculadora IMC
                    </NavLink>
                </li>
                <li>
                    <NavLink className={addIsActive} to='change-data'>
                        Alterar dados pessoais
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
