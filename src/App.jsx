import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import LandingPage from '@/pages/landing/LandingPage';
import Dashboard from '@/pages/dashboard/Dashboard';
import Publicaciones from '@/pages/landing/components/Publicaciones';
import Layout_ex from '@/components/layouts/Layout_ex';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/layout' element={<Layout_ex />} />
            {/* Agregar rutas necesarias */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
