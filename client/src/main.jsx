import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import FoodTablePage from './pages/FoodTablePage/FoodTablePage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import CaloriesPage from './pages/CaloriesPage/CaloriesPage.jsx';
import BMICalculatorPage from './pages/BMICalculatorPage/BMICalculatorPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ChangeDataPage from './pages/ChangeDataPage/ChangeDataPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import { RequireAuth, AuthProvider } from './auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path='/'
                        element={<App />}
                        errorElement={<ErrorPage />}>
                        <Route path='/login' element={<LoginPage />} />
                        <Route
                            index
                            element={
                                <RequireAuth>
                                    <HomePage />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/food-table'
                            element={
                                <RequireAuth>
                                    <FoodTablePage />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/calories'
                            element={
                                <RequireAuth>
                                    <CaloriesPage />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/calculator'
                            element={
                                <RequireAuth>
                                    <BMICalculatorPage />
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
