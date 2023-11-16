import { createContext, useContext, useState } from 'react';
import { googleLogout } from '@react-oauth/google';

import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Inicia una sesion en Google y luego en el backend. todo: incorporar el inicio de sesion con google de Login en este contexto.
  const login = async (googleUserData) => {
    try {
      if (googleUserData.access_token) {
        console.log(googleUserData);
        const backendAuth = await axios.post('/auth/google', {
          token: googleUserData.access_token,
        });

        if (backendAuth.role === 'ADMIN') {
          // localStorage.setItem('email', backendAuth.email);
          localStorage.setItem('token', backendAuth.token);
          setUser(backendAuth);
          setIsAuthenticated(true);
          setRedirectToHome(true);
        }
      }
    } catch (error) {
      console.error('Error de autenticación: ', error.message);
    }
  };

  // Cierra la sesión y elimina la información del usuario del estado
  const logout = async () => {
    if (user) {
      await axios.post('/auth/google/logout', { token: user.token });
      googleLogout();
      localStorage.clear();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
