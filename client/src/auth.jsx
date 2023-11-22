import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const AuthContext = React.createContext('auth');

const useAuth = () => {
    const [auth, setAuth] = useState(null);
    const [authed, setAuthed] = useState(false);

    return {
        authed: authed,
        auth: auth,
        async login(username, password) {
            const data = {
                usuario: username,
                senha: password,
            };

            const result = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/login`,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            ).then((res) => res.json());

            if (result.usuario?.id) {
                setAuth(result);
                setAuthed(true);

                localStorage.setItem('usuario', result.usuario);
            } else {
                setAuth({});
                setAuthed(false);
            }

            return result;
        },
        async logout() {
            setAuthed(false);
            setAuth({});
        },
    };
};

const RequireAuth = ({ children }) => {
    const auth = AuthConsumer();
    const location = useLocation();

    if (!auth) return;

    if (!auth.authed) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
};

const AuthProvider = ({ children }) => {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const AuthConsumer = () => {
    return React.useContext(AuthContext);
};

export { RequireAuth, AuthConsumer, AuthProvider };
