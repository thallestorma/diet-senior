import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import FoodTable from './pages/FoodTable/FoodTable.jsx';
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Calories from './pages/Calories/Calories.jsx';
import BMICalculator from './pages/BMICalculator/BMICalculator.jsx';
import Login from './pages/LoginPage/Login.jsx';
import ChangeDataPage from './pages/ChangeDataPage/ChangeDataPage.jsx';
import { RequireAuth, AuthProvider } from './auth.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path='/'
                        element={<App />}
                        errorElement={<ErrorPage />}>
                        <Route path='/login' element={<Login />} />
                        <Route
                            index
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/food-table'
                            element={
                                <RequireAuth>
                                    <FoodTable />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/calories'
                            element={
                                <RequireAuth>
                                    <Calories />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/calculator'
                            element={
                                <RequireAuth>
                                    <BMICalculator />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/change-data'
                            element={
                                <RequireAuth>
                                    <ChangeDataPage />
                                </RequireAuth>
                            }
                        />
                        <Route path='/register' element={<RegisterPage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
