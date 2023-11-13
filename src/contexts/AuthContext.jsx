import { createContext, useContext, useState } from 'react';
import instance from '@/helpers/axiosConfig';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Inicia una sesion en Google y luego en el backend.
  const login = async (googleUserData) => {
    try {
      if (googleUserData.credential) {
        const backendAuth = await axios.post('/auth/google', { token: googleUserData.credential });

        if (backendAuth.role === 'ADMIN') {
          localStorage.setItem('email', backendAuth.email);
          localStorage.setItem('token', backendAuth.token);
          setUser(backendAuth);
          setIsAuthenticated(true);
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
