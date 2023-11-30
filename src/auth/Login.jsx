import { useGoogleLogin } from '@react-oauth/google';
import { Card, Typography, Box, CardMedia, Button, Modal, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts/AuthContext';
import { googleOAuthCredential } from '@/helpers/googleCredentials';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [open, setOpen] = useState(true);

  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const googleLoginHandler = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      await login(codeResponse);
      handleClose();
      navigate('/');
    },
    onError: () => {
      console.log('Login Failed');
    },
    clientId: googleOAuthCredential,
    flow: 'implicit',
  });

  //Arreglar el CORS. para refactorizar: esta funcionalidad pasarla al contexto de autenticacion.
  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);

    // Verificar si existe la propiedad "credential"
    if (credentialResponse && credentialResponse.credential) {
      axios
        .post(`http://localhost:8081/auth/google?tokenId=${credentialResponse.credential}`)
        .then((res) => {
          // Guarda el token JWT u otra respuesta del backend
          console.log("RES", res);
          localStorage.setItem("authToken", res.data.token);
        })
        .catch((error) => {
          console.error("Error al autenticar con Google en el backend:", error);
        });
    } else {
      console.error("Fallo en la autenticación de Google:", credentialResponse);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            outline: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ width: '360px', borderRadius: '8px' }}>
            <Box display='flex' flexDirection='column' alignItems='center' padding='20px'>
              <Typography variant='h1' align='center' paddingBottom='5px' sx={{ fontWeight: 800 }}>
                Ingreso
              </Typography>
              <Typography variant='h1' align='center' paddingBottom='20px' sx={{ fontWeight: 800 }}>
                Administrador
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{
                    height: '20%',
                    width: '20%',
                    margin: '30px',
                    padding: '5px',
                    alignSelf: 'center',
                  }}
                  component='img'
                  image={'/src/assets/images/logo_card_ingreso_registro.png'}
                  alt={'Logo Ubuntu en tarjeta de inicio de sesion'}
                />
              </Box>
              <Box display='flex' justifyContent='center' mt={2}>
              
                <GoogleOAuthProvider clientId="812742210015-teti3ojikbl41vlpmjc2osgmc1clj2hv.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    cookiePolicy={"single_host_origin"}
                  />
                </GoogleOAuthProvider>
                
                  
              </Box>
            </Box>
          </Card>
        </Box>
      </Fade>
    </Modal>
  );
};
export default Login;
