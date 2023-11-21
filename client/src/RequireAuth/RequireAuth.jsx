// import { useLocation, Navigate } from 'react-router-dom';
// import useAuth from '../CustomHooks/useAuth';

// export default function RequireAuth({ children }) {
//     const { authed } = useAuth();
//     const location = useLocation();

//     console.log('authed', authed);

//     return authed === true ? (
//         children
//     ) : (
//         <Navigate to='/login' replace state={{ path: location.pathname }} />
//     );
// }
