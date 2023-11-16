import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, Button, Box, Collapse } from '@mui/material';

import AdminAvatar from '@/components/icons/AdminAvatar';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const LogoutButton = styled(Button)({
  display: 'block',
  margin: '8px auto',
  padding: '4px 16px',
});

const StyledCollapse = styled(Collapse)({
  position: 'absolute',
  width: 'auto',
  top: 'calc(100% + 10px)',
  right: '1%',
  zIndex: 1,
});

function Navbar() {
  const [showLogout, setShowLogout] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleLogoutClick = () => {
    setShowLogout(!showLogout);
  };
  return (
    <AppBar position='static' color='background'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Button>
          <Link to='/login'>Inicia Sesion</Link>
        </Button>
        {isAuthenticated && (
          <Box sx={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>
            <Button onClick={handleLogoutClick}>
              <AdminAvatar />
            </Button>
            <StyledCollapse in={showLogout}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                bgcolor='background.paper'
                boxShadow={1}
                p={2}
              >
                <LogoutButton variant='contained' color='secondary' onClick={handleLogoutClick}>
                  Cerrar sesión
                </LogoutButton>
              </Box>
            </StyledCollapse>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
