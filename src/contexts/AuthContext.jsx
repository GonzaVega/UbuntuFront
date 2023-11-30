import { createContext, useContext, useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
//SE REALIZARON MODIFICACIONES SOLO PARA PRUEBAS.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const login = async (googleUserData) => {
    try {

      const backendAuth = await axios.post(`http://localhost:8081/auth/google?tokenId=${googleUserData}`);
      
      if (googleUserData.access_token) {
        console.log(googleUserData.credentials);

        // Obtener información del perfil del usuario desde la API de Google
      const profileInfo = await axios.get('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${googleUserData.access_token}`,
        },
      });

      console.log(profileInfo)

      //const backendAuth = await axios.post(`http://localhost:8081/auth/google?tokenId=${profileInfo.data}`);

      // Enviar tokenId y datos del perfil al backend como parámetros de consulta
      /* const backendAuth = await axios.post('http://localhost:8081/auth/google', null, {
        params: {
          tokenId:{
            email: profileInfo.data.email,
            name: profileInfo.data.given_name,
            lastName: profileInfo.data.family_name,
            picture: profileInfo.data.picture,
          }
        },
      }); */

      /* const backendAuth = await axios.post('http://localhost:8081/auth/google', {
        tokenId: googleUserData.access_token,
        email: profileInfo.data.email,
        name: profileInfo.data.given_name,
        lastName: profileInfo.data.family_name,
        picture: profileInfo.data.picture,
        // Agrega otros campos según sea necesario
      }); */

        //const backendAuth = await axios.post(`http://localhost:8081/auth/google?tokenId=${googleUserData.access_token}`);

        if (backendAuth.role === 'ADMIN') {
          localStorage.setItem('token', backendAuth.token);
          setUser(backendAuth);
          setIsAuthenticated(true);
        }
        
        setIsAuthenticated(true);
        localStorage.setItem('token', backendAuth.token);
      }
    } catch (error) {
      console.error('Error de autenticación: ', error.message);
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
      window.location.href = '/';
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
