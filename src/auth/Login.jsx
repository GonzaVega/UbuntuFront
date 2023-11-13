import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Card, Typography } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import { googleOAuthCredential } from '@/helpers/googleCredentials';

const Login = () => {
  const { login, isAuthenticated } = useAuth();

  const responseGoogle = (response) => {
    if (!isAuthenticated) {
      login(response);
    }
  };

  return (
    <Card style={{ border: '1px solid #ddd' }}>
      <Typography variant='h5' color='primary' textAlign='center'>
        Ingreso
      </Typography>
      <Typography variant='h5' color='primary' textAlign='center'>
        Administrador
      </Typography>

      <GoogleOAuthProvider clientId={googleOAuthCredential}>
        <GoogleLogin
          buttonText='Continuá con Google'
          onSuccess={responseGoogle}
          onFailure={() => {
            console.log('fallo');
          }}
          cookiePolicy={'single_host_origin'}
          type='icon'
          size='medium'
          theme='outline'
          shape='circle'
          useOneTap
          cancel_on_tap_outside
        />
      </GoogleOAuthProvider>
    </Card>
  );
};

export default Login;
