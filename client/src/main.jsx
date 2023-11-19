import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import FoodTable from './pages/FoodTable/FoodTable.jsx';
import Home from './pages/Home/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Calories from './pages/Calories/Calories.jsx';
import BMICalculator from './pages/BMICalculator/BMICalculator.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        // loader: rootLoader,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'food-table',
                element: <FoodTable />,
            },
            {
                path: 'calories',
                element: <Calories />,
            },
            {
                path: 'calculator',
                element: <BMICalculator />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
