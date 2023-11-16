import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@/styles/index.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleOAuthCredential } from '@/helpers/googleCredentials';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleOAuthCredential}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
