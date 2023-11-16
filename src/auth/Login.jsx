import { useGoogleLogin } from '@react-oauth/google';
import { Card, Typography, Box, CardMedia, Button, Modal, Fade } from '@mui/material';
import CardContainer from '@/components/card/CardContainer';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts/AuthContext';
import { googleOAuthCredential } from '@/helpers/googleCredentials';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Arreglar el CORS. para refactorizar: esta funcionalidad pasarla al contexto de autenticacion.
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
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
              <Typography variant='h1' align='center' paddingBottom='10px'>
                Ingreso
              </Typography>
              <Typography variant='h1' align='center' paddingBottom='20px'>
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
                <Button
                  onClick={googleLoginHandler}
                  variant='contained'
                  sx={{
                    lineHeight: '1.25rem',
                    padding: '0.625rem 1.89rem',
                    marginTop: '10px',
                    textTransform: 'none',
                  }}
                  startIcon={
                    <img
                      src='src/assets/images/1657955079google-icon-png.png'
                      alt='Google Logo'
                      style={{ width: '36px', marginRight: '10px' }}
                    />
                  }
                  disableElevation
                >
                  <Typography variant='h7' align='center'>
                    Continuá con Google
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Fade>
    </Modal>
  );
  // (
  //   <Modal
  //     aria-labelledby='transition-modal-title'
  //     aria-describedby='transition-modal-description'
  //     open={open}
  //     onClose={handleClose}
  //     closeAfterTransition
  //     // slots={{ backdrop: Backdrop }}
  //     slotProps={{
  //       backdrop: {
  //         timeout: 500,
  //       },
  //     }}
  //   >
  //     <Fade in={open}>
  //       <CardContainer>
  //         <Card sx={{ width: '360px', justifyContent: 'center', borderRadius: '8px' }}>
  //           <Box display='flex' flexDirection='column' margin='50px'>
  //             <Typography variant='h1' align='center' padding='5px'>
  //               Ingreso
  //             </Typography>
  //             <Typography variant='h1' align='center'>
  //               Administrador
  //             </Typography>
  //             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  //               <CardMedia
  //                 sx={{
  //                   height: '20%',
  //                   width: '20%',
  //                   margin: '30px',
  //                   padding: '5px',
  //                   alignSelf: 'center',
  //                 }}
  //                 component='img'
  //                 image={'/src/assets/images/logo_card_ingreso_registro.png'}
  //                 alt={'Logo Ubuntu en tarjeta de inicio de sesion'}
  //               />
  //             </Box>
  //             <Box display='flex' justifyContent='center' mt={2}>
  //               <Button
  //                 onClick={googleLoginHandler}
  //                 variant='contained'
  //                 sx={{
  //                   lineHeight: '1.25rem',
  //                   padding: '0.625rem 1.89rem',
  //                   marginTop: '10px',
  //                   textTransform: 'none',
  //                 }}
  //                 startIcon={
  //                   <img
  //                     src='src/assets/images/1657955079google-icon-png.png'
  //                     alt='Google Logo'
  //                     style={{ width: '36px', marginRight: '10px' }}
  //                   />
  //                 }
  //                 disableElevation
  //               >
  //                 <Typography variant='h7' align='center'>
  //                   Continuá con Google
  //                 </Typography>
  //               </Button>
  //             </Box>
  //           </Box>
  //         </Card>
  //       </CardContainer>
  //     </Fade>
  //   </Modal>
  // );
};
export default Login;
