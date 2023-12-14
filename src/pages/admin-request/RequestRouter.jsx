import { ADMIN_ROUTES } from '@/constants/routes';
import LinkTab from '@/pages/admin-request/components/LinkTab';
import Manage from '@/pages/admin-request/pages/manage/Manage';
import Managed from '@/pages/admin-request/pages/managed/Managed';
import Unmanaged from '@/pages/admin-request/pages/unmanaged/Unmanaged';
import { Box, Container, Grid, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export default function RequestRouter() {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography mt={'2.5rem'} textAlign={'center'} variant='h1'>
            Solicitudes de Contacto
          </Typography>
          <Box width={'100%'} display='flex' justifyContent={'center'}>
            <Tabs
              sx={{ mt: '1.5rem', borderBottom: '1px solid black' }}
              value={value}
              onChange={handleChange}
            >
              <LinkTab label='No Gestionadas' to={ADMIN_ROUTES.CONTACT_REQUESTS.UNMANAGED} />
              <LinkTab label='Gestionadas' to={ADMIN_ROUTES.CONTACT_REQUESTS.MANAGED} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      <Routes>
        <Route path={ADMIN_ROUTES.CONTACT_REQUESTS.UNMANAGED} element={<Unmanaged />} />
        <Route path={ADMIN_ROUTES.CONTACT_REQUESTS.MANAGED} element={<Managed />} />
        <Route path={ADMIN_ROUTES.CONTACT_REQUESTS.BY_ID} element={<Manage />} />
      </Routes>
    </Container>
  );
}
