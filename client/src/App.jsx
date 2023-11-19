import { Outlet } from 'react-router-dom';

import './App.css';
import Menu from './Menu/Menu';

function App() {
    return (
        <>
            <header>
                <h1>Diet Senior</h1>
            </header>

            <Menu />

            <main className='container'>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}

export default App;
