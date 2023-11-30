import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import NavBar from '@/components/common/NavBar';
import LandingPage from '@/pages/landing/LandingPage';
import Dashboard from '@/pages/dashboard/Dashboard';
import PublicationsRouter from '@/pages/publications/PublicationsRouter';
import Proveedores from '@/pages/proveedores/Proveedores';
import MicroemprendimientosRouter from '@/pages/microemprendimientos/MicroemprendimientosRouter';
import Layout_ex from '@/components/layouts/Layout_ex';
import Login from '@/auth/Login';
import { useAuth } from '@/contexts/AuthContext';
import SearchPage from '@/pages/search/SearchPage';
import MicroentrepreneurshipRouter from '@/pages/admin-microentrepreneurship/MicroentrepreneurshipRouter';

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
            <Route path='/publicaciones/*' element={<PublicationsRouter />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/microemprendimientos/*' element={<MicroemprendimientosRouter />} />
            <Route
              path='/admin/microentrepreneurship/*'
              element={<MicroentrepreneurshipRouter />}
            />
            {!isAuthenticated && <Route path='/login' element={<Login />} />}
            {/* Agregar rutas necesarias */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
