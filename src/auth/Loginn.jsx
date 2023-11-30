import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Login() {

  // Obtiene el token JWT almacenado en localStorage (asegúrate de haberlo guardado previamente)
  // const authToken = localStorage.getItem("authToken");

  // console.log("token", authToken);



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
    <>
      <Typography>Login</Typography>
      <Divider sx={{ mt: 3, mb: 5 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <GoogleOAuthProvider clientId="812742210015-teti3ojikbl41vlpmjc2osgmc1clj2hv.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 10, mb: 10 }} />
    </>
  );
}
