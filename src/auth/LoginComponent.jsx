import React from 'react';
import { Card, CardContent, Container, Typography, Button, IconButton, Icon, Box } from '@mui/material';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
    const content = {
        backgroundImage: 'url(../img/fondoRegistro.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100hv',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const cardContentStyle = {
        margin: '168px 20px 224px 20px',
    }
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const contentFirstStyle = {
        display: 'flex',
        width: '328px',
        padding: '16px 0px 32px 0px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const titlesStyle = {
        display: 'flex',
        width: '200px',
        padding: '16px 0px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
    };
    const title = {
        display: 'flex',
        width: '200px',
        height: '32px',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'var(--Negro, #222)',
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '30px' /* 107.143% */
    };
    const subtitle = {
        display: 'flex',
        width: '400px',
        height: '32px',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'var(--Negro, #222)',
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '30px' /* 107.143% */
    };
    const contentSecondStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '245px',
        height: '72px'
    };
    const buttonTitle = {
        display: 'flex',
        width: '245px',
        height: '24px',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'var(--Negro, #222)',
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWight: '500',
        lineHeight: '30px'/* 187.5% */
    };
    const handleGoogleLogin = async (res) => {
        const {tokenId} = res;
        const userInfo = await obtenerInformacionUsuarioDesdeBackend(tokenId);
        if (userInfo) {
            setUserInfo(userInfo);
        }
        alert('Inicio de sesión exitoso con Gmail');
    };

    const obtenerInformacionUsuarioDesdeBackend = async (token) => {
        try {
            const response = await fetch('http://localhost:8080', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al obtener información del usuario', error);
            return null;
        }
    };

    return (
        <Container sx={content}>
            <Card sx={cardContentStyle}>
                <CardContent sx={cardStyle}>
                    <Box component='div' sx={contentFirstStyle}>
                        <Box component='div' sx={titlesStyle}>
                            <Typography variant="h4" component="h4" sx={title}>
                                Inicia sesión
                            </Typography>
                            <Typography variant="h6" component="h6" sx={subtitle}>
                                Seguí disfrutando de ECOSistema
                            </Typography>
                        </Box>
                        <img src="../img/hojas.png" alt="" height={'75px'} width={'80px'} />
                    </Box>
                    <Box sx={contentSecondStyle}>
                        <Typography variant="h5" component="p" sx={buttonTitle}>
                            Ingresá con tu cuenta de Gmail
                        </Typography>
                        <GoogleOAuthProvider clientId="880693228552-afpvmjh89snjcpi8901kg1katejr3mok.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={handleGoogleLogin}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Login