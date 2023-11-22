import { NavLink, useNavigate } from 'react-router-dom';
import { AuthConsumer } from './../auth.jsx';

import './Menu.css';

export default function Menu() {
    const navigate = useNavigate();
    const auth = AuthConsumer();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };

    const addIsActive = ({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : '';

    return auth.authed === true ? (
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
                <li>
                    {auth.authed && (
                        <button onClick={handleLogout}>Logout</button>
                    )}
                </li>
            </ul>
        </nav>
    ) : (
        <div></div>
    );
}
