import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import { ADMIN_ROUTES, USER_ROUTES } from '@/constants/routes';
import Login from '@/auth/Login';
import theme from '@/theme/theme';
import NavBar from '@/components/common/NavBar';
import Dashboard from '@/pages/dashboard/Dashboard';
import SearchPage from '@/pages/search/SearchPage';
import LandingPage from '@/pages/landing/LandingPage';
import Publications from '@/pages/publications/Publications';
import MicroemprendimientosRouter from '@/pages/microemprendimientos/MicroemprendimientosRouter';
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
            <Route path={USER_ROUTES.HOME} element={<LandingPage />} />
            <Route path={USER_ROUTES.POSTS} element={<Publications />} />
            <Route path={USER_ROUTES.SEARCH} element={<SearchPage />} />
            <Route
              path={USER_ROUTES.MICROENTREPRENEURSHIPS.ROUTER_ROUTE + '/*'}
              element={<MicroemprendimientosRouter />}
            />
            <Route path={ADMIN_ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route
              path={ADMIN_ROUTES.MICROENTREPRENEURSHIPS.ROUTER_ROUTE + '/*'}
              element={<MicroentrepreneurshipRouter />}
            />
            {!isAuthenticated && <Route path={USER_ROUTES.LOGIN} element={<Login />} />}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
