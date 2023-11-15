import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Drawer, styled, useTheme, List, ListItem } from '@mui/material';
import { useState } from 'react';
import BurgerBtn from '@/components/common/BurgerBtn';
import { Link } from 'react-router-dom';
import images from '@/assets/images/logoubuntu.png';

const StyledDrawer = styled(Drawer)(() => ({
  top: '55px',
  '.MuiBackdrop-root, .MuiPaper-root': {
    top: '55px',
  },
}));

function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { palette } = useTheme();

  function handleToggle() {
    setDrawerIsOpen(!drawerIsOpen);
  }

  return (
    <AppBar position='static' color='background'>
      <Toolbar>
        <BurgerBtn isActive={drawerIsOpen} handleShowMenu={handleToggle} />
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                  <img src={images} alt='Logo de Ubuntu'
                      style={{ width: '120px', height: '56px', alignItems: 'center', justifyContent: 'center', }} />
              </Box>
        <StyledDrawer anchor={'left'} open={drawerIsOpen} onClose={handleToggle}>
          <Box sx={{ width: '15rem', background: `${palette.primary.main}`, height: '100%' }}>
            <List sx={{ py: '1rem' }}>
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
                  Inicio
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
                  Microemprendimientos
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
                  Publicaciones
                </Link>
              </ListItem>
            </List>
          </Box>
        </StyledDrawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
