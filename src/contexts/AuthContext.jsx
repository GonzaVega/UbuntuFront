import { createContext, useContext, useState } from 'react';

import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

import { USER_ROUTES } from '@/constants/routes';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
//SE REALIZARON MODIFICACIONES SOLO PARA PRUEBAS.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const API_BASE_URL = 'http://localhost:8081';

  const login = async (credentialResponse) => {
    try {
      if (credentialResponse.credential) {
        const tokenId = credentialResponse.credential;
        console.log('Token ID:', tokenId);

        const authResponse = await authenticateWithGoogle(tokenId);

        console.log('Backend Auth Response:', JSON.stringify(authResponse, null, 2));

        saveUserInfo(authResponse);
        console.log('User----' + user);

        return true;
      }
    } catch (error) {
      setAuthError('No puede acceder a este sitio');
    }
  };

  const authenticateWithGoogle = async (tokenId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google?tokenId=${tokenId}`);
      return response.data;
    } catch (error) {
      console.error('Authentication API Error:', error.message);
      throw new Error(error.message);
    }
  };

  const saveUserInfo = (authResponse) => {
    if (authResponse != null) {
      console.log(authResponse.firstName);
      console.log('tiene datos data------------');
      if (authResponse.role === 'ADMIN') {
        console.log('es admin------------');
        const { token } = authResponse;
        console.log('token---' + token);
        localStorage.setItem('token', token);
        setUser(authResponse);
        setIsAuthenticated(true);

        console.log('User:', user);
      }
    }
  };

  // Cierra la sesión y elimina la información del usuario del estado. revisar comentarios: se han efectuado para realizar demostracion
  const logout = async () => {
    if (user) {
      // Logica de cierre de sesión cuando haya backend.
      await axios.post('/auth/google/logout', { token: user.token });
      googleLogout();
      localStorage.clear();
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = USER_ROUTES.HOME;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, authError, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
