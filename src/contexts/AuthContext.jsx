import { createContext, useContext, useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

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

        handleAuthResponse(authResponse);
        console.log('User----'+user);
      }
    } catch (error) {
      console.error('Authentication Error:', error.message);
    }
  };

  const authenticateWithGoogle = async (tokenId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google?tokenId=${tokenId}`);
      return response.data;
    } catch (error) {
      console.error('Authentication API Error:', error.message);
      return { error: 'No está autorizado a ingresar.' };
    }
  };

  const handleAuthResponse = (authResponse) => {
    if (authResponse != null) {
      console.log(authResponse.firstName)
      console.log("tiene datos data------------")
      if(authResponse.role === 'ADMIN'){
        console.log("es admin------------")
        const { token } = authResponse;
        console.log("token---"+token)
        localStorage.setItem('token', token);
        setUser(authResponse);
        setIsAuthenticated(true);

        console.log('User:', user);
      }
    }
  };

  // const login = async (credentialResponse) => {
  //   try {

  //     if (credentialResponse.credential) {
  //       console.log(credentialResponse.credential);
  //       const authResponse = await axios
  //                           .post(`http://localhost:8081/auth/google?tokenId=${credentialResponse.credential}`);
        

  //       console.log("backendAuth---" + JSON.stringify(authResponse, null, 2))

  //       if (authResponse.error) {
  //         console.log(authResponse.error)
  //       } else if (authResponse.data !== null && authResponse.role === 'ADMIN') {
  //         localStorage.setItem('token', authResponse.data.token);
  //         setUser(authResponse.data);
  //         setIsAuthenticated(true);

  //         localStorage.setItem('token', authResponse.data.token);

  //         console.log("user----" + user)
  //       }

  //     }
  //   } catch (error) {
  //     console.error('Error de autenticación: ', error.message);
  //   }
  // };

  // Cierra la sesión y elimina la información del usuario del estado. revisar comentarios: se han efectuado para realizar demostracion
  const logout = async () => {
    if (user) {
      // Logica de cierre de sesión cuando haya backend.
      await axios.post('/auth/google/logout', { token: user.token });
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
