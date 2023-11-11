import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/images/landing/logoubuntu.png';

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Toolbar>
        {/* Aquí puedes agregar tu logo si lo tienes */}
        <img src={Logo} alt='Logo de Ubuntu' style={{ width: '80px', height: 'auto' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nombre del Sitio
        </Typography>
        {/* Agrega tus botones de navegación aquí */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
