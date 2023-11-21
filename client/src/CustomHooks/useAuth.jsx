// import { createContext, useContext, useState } from 'react';

// import authContext from './AuthProvider';

// // const authContext = createContext();

// export default function useAuth() {
//     const context = useContext(authContext);
//     console.log('context', context);

//     const [authed, setAuthed] = useState(false);

//     return {
//         authed: authed,
//         async login() {
//             const data = {
//                 usuario: 'admin',
//                 senha: 'admin',
//             };
//             try {
//                 const response = await fetch('http://localhost:3000/login', {
//                     method: 'POST',
//                     body: JSON.stringify(data),
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });

//                 const json = await response.json();

//                 if (json.usuario?.id) {
//                     setAuthed(true);
//                 }
//             } catch (error) {
//                 console.log('error', error);
//                 setAuthed(false);
//             }
//         },
//         logout() {
//             return new Promise((res) => {
//                 setAuthed(false);
//                 res();
//             });
//         },
//     };
// }

// // export default function AuthConsumer() {
// //     return useContext(authContext);
// // }
