import { createContext, useContext, useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import NoticeCard from '@/components/common/NoticeCard';
import { render } from 'react-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
//SE REALIZARON MODIFICACIONES SOLO PARA PRUEBAS.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //solo para demo.
  const dummyUser = {
    token: 'your_generated_token_here',
    email: 'gonzaarg03@gmail.com',
    firstName: 'Gonzalo',
    lastName: 'Vega',
    photoUrl: 'https//lafotodetuperfildegoogle.jpg',
    role: 'ADMIN',
  };

  //Inicia una sesion en Google y luego en el backend. todo: incorporar el inicio de sesion con google de Login en este contexto. revisar comentarios: se han efectuado para realizar demostracion
  const login = async (googleUserData) => {
    try {
      if (googleUserData.access_token) {
        console.log(googleUserData);
        // localStorage.setItem('token', user.token);
        setUser(dummyUser);
        setIsAuthenticated(true);
        // localStorage.setItem('email', user.email);
      }
    } catch (error) {
      console.error('Error de autenticación: ', error.message);
    }
    //   //Logica para inicio de sesion cuando haya backend.
    //   //     const backendAuth = await axios.post('/auth/google', {
    //   //       token: googleUserData.access_token,
    //   //     });

    //   //     if (backendAuth.role === 'ADMIN') {
    //   //       // localStorage.setItem('email', backendAuth.email);
    //   //       localStorage.setItem('token', backendAuth.token);
    //   //       setUser(backendAuth);
    //   //       setIsAuthenticated(true);
    //   //
    //   //     }
    //   //   }
  };

  //ESTA FUNCION DEBERIA IR EN LA VERSION FINAL.
  // const login = async (googleUserData) => {
  //   try {
  //     if (googleUserData.access_token) {
  //       const backendAuth = await axios.post('/auth/google', {
  //         token: googleUserData.access_token,
  //       });

  //       if (backendAuth.role === 'ADMIN') {
  //         localStorage.setItem('token', backendAuth.token);
  //         setUser(backendAuth);
  //         setIsAuthenticated(true);
  //       }
  //       console.log(googleUserData);
  //       setUser(dummyUser);
  //       setIsAuthenticated(true);
  //       localStorage.setItem('token', user.token);
  //     }
  //   } catch (error) {
  //     console.error('Error de autenticación: ', error.message);
  //   }
  // };

  // Cierra la sesión y elimina la información del usuario del estado. revisar comentarios: se han efectuado para realizar demostracion
  const logout = async () => {
    if (user) {
      // Logica de cierre de sesión cuando haya backend.
      // await axios.post('/auth/google/logout', { token: user.token });
      googleLogout();
      localStorage.clear();
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = '/';
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
