import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import NavBar from '@/components/common/NavBar';
import LandingPage from '@/pages/landing/LandingPage';
import Dashboard from '@/pages/dashboard/Dashboard';
import Publicaciones from '@/pages/landing/components/Publicaciones';
import Proveedores from '@/pages/proveedores/Proveedores';
import Layout_ex from '@/components/layouts/Layout_ex';
import Login from '@/auth/Login';
import { useAuth } from '@/contexts/AuthContext';
import SearchPage from '@/pages/search/SearchPage';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/layout' element={<Layout_ex />} />
            <Route path='/proveedores' element={<Proveedores />} />
            <Route path='/publicaciones' element={<Publicaciones />} />
            <Route path='/search' element={<SearchPage />} />
            {!isAuthenticated && <Route path='/login' element={<Login />} />}
            {/* Agregar rutas necesarias */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
