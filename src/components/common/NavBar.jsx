import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Box,
  Drawer,
  styled,
  useTheme,
  List,
  ListItem,
  Button,
  Collapse,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { useAuth } from '@/contexts/AuthContext';
import BurgerBtn from '@/components/common/BurgerBtn';
import images from '@/assets/images/logoubuntu.png';
import AdminAvatar from '@/components/icons/AdminAvatar';

const StyledDrawer = styled(Drawer)(() => ({
  top: '55px',
  '.MuiBackdrop-root, .MuiPaper-root': {
    top: '55px',
  },
}));

const StyledCollapse = styled(Collapse)({
  position: 'absolute',
  width: '104px',
  height: '40px',
  top: 'calc(100% + 8px)',
  right: '10%',
  zIndex: 1,
});

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { palette } = useTheme();

  function handleToggle() {
    setDrawerIsOpen(!drawerIsOpen);
  }

  const handleLogoutClick = () => {
    setShowLogout(!showLogout);
  };

  const handleCloseLogout = () => {
    setShowLogout(false);
    logout();
  };

  return (
    <AppBar position='static' color='background'>
      <Toolbar>
        <BurgerBtn isActive={drawerIsOpen} handleShowMenu={handleToggle} />
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={images}
            alt='Logo de Ubuntu'
            style={{
              width: '120px',
              height: '56px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {!isAuthenticated && (
              <Link
                style={{
                  textDecoration: 'none',
                  color: `${palette.background.paper}`,
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  lineHeight: '1.25rem',
                }}
                onClick={logout}
                to='/login'
              >
                <Typography variant='p' sx={{ color: 'black' }}>
                  Iniciar Sesión
                </Typography>
              </Link>
            )}
            {isAuthenticated && (
              <>
                <Button onClick={handleLogoutClick}>
                  <AdminAvatar />
                </Button>
                <StyledCollapse in={showLogout}>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease-in-out',
                      '&:hover': {
                        bgcolor: '#B3B3B3',
                      },
                      '&:active': {
                        bgcolor: '#A3A3A3',
                      },
                    }}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    bgcolor='#D2D2D2'
                    boxShadow={1}
                    p={2}
                    borderRadius='0px 0px 4px 4px'
                    onClick={handleCloseLogout}
                  >
                    <Typography
                      variant='p'
                      color='black'
                      sx={{ whiteSpace: 'nowrap', fontWeight: '500' }}
                    >
                      Cerrar sesión
                    </Typography>
                  </Box>
                </StyledCollapse>
              </>
            )}
          </Box>
        </Box>
        <StyledDrawer anchor={'left'} open={drawerIsOpen} onClose={handleToggle}>
          <Box sx={{ width: '15rem', background: `${palette.primary.main}`, height: '100%' }}>
            <List sx={{ py: '1rem' }}>
              {isAuthenticated && (
                <>
                  <ListItem sx={{ py: '1rem' }}>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: `${palette.background.paper}`,
                        fontSize: '1.20rem',
                        fontWeight: '600',
                        lineHeight: '1.25rem',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                      }}
                      //esta ruta arreglarla cuando tengamos pagina de perfil.
                      to='/'
                    >
                      Administrador
                    </Link>
                  </ListItem>
                  <ListItem sx={{ py: '1rem' }}>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: `${palette.background.paper}`,
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        lineHeight: '1.25rem',
                      }}
                    >
                      Dashboard Administrador
                    </Link>
                  </ListItem>
                </>
              )}
              {!isAuthenticated && (
                <ListItem sx={{ py: '1rem' }}>
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: `${palette.background.paper}`,
                      fontSize: '1.125rem',
                      fontWeight: '500',
                      lineHeight: '1.25rem',
                    }}
                    to='/'
                  >
                    Inicio
                  </Link>
                </ListItem>
              )}

              <ListItem sx={{ py: '1rem' }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: `${palette.background.paper}`,
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    lineHeight: '1.25rem',
                  }}
                >
                  Microemprendimientos
                </Link>
              </ListItem>
              {isAuthenticated && (
                <>
                  <ListItem sx={{ py: '1rem' }}>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: `${palette.background.paper}`,
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        lineHeight: '1.25rem',
                      }}
                    >
                      Solicitudes de Contacto
                    </Link>
                  </ListItem>
                  <ListItem sx={{ py: '1rem' }}>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: `${palette.background.paper}`,
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        lineHeight: '1.25rem',
                      }}
                      to='/proveedores'
                    >
                      Proveedores
                    </Link>
                  </ListItem>
                </>
              )}
              <ListItem sx={{ py: '1rem' }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: `${palette.background.paper}`,
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    lineHeight: '1.25rem',
                  }}
                  to='/publicaciones'
                >
                  Publicaciones
                </Link>
              </ListItem>
            </List>
          </Box>
          {!isAuthenticated && (
            <ListItem sx={{ py: '1rem', bottom: 80 }}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: `${palette.background.paper}`,
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  lineHeight: '1.25rem',
                }}
                onClick={logout}
                to='/loginn'
              >
                Iniciar Sesión en Ubuntu
              </Link>
            </ListItem>
          )}
          {isAuthenticated && (
            <ListItem sx={{ py: '1rem', bottom: 80 }}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: `${palette.background.paper}`,
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  lineHeight: '1.25rem',
                }}
                onClick={logout}
              >
                {`Cerrar Sesión (${user.firstName})`}
              </Link>
            </ListItem>
          )}
        </StyledDrawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
