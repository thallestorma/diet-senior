import { useState } from 'react';
import './App.css';
import { FoodTable } from './FoodTable/FoodTable';

function App() {
    return (
        <>
            <header>
                <h1>Diet Senior</h1>
            </header>

            <main className='container'>
                <FoodTable />
            </main>

            <footer></footer>
        </>
    );
}

export default App;
