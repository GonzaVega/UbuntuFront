// TemporaryDrawer.jsx
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Navbar from './Navbar';

function TemporaryDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerStyles = {
    width: 256,
    height: 744,
    backgroundColor: '#093C59',
    zIndex: 999,
  };

  const listItemTextStyles = {
    color: '#ffffff',
  };

  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} style={drawerStyles}>
          <List>
            {['Microemprendimientos', 'Publicaciones'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} style={listItemTextStyles} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
