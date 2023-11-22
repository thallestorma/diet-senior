import { Outlet } from 'react-router-dom';

import './App.css';
import Menu from './Menu/Menu';

function App() {
    return (
        <>
            <div className='container'>
                <header>
                    <h1>Diet Senior</h1>
                </header>

                <Menu />

                <main>
                    <div className='content-container'>
                        <Outlet />
                    </div>
                </main>

                <footer></footer>
            </div>
        </>
    );
}

export default App;
