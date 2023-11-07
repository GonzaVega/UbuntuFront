import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position='static' sx={() => ({ bgcolor: 'naranjas.medium' })}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Nombre sitio
        </Typography>
        <Button color='inherit'>
          <Link to='/'>Inicio</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/dashboard'>Dashboard</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/layout'>Layout</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/publicaciones'>Publicaciones</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/proveedores'>Proveedores</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
