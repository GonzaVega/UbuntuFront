import LoadForm from '@/pages/admin-microentrepreneurship/pages/load/components/LoadForm';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function LoadMicroentrepreneurship() {
  return (
    <Container sx={{ py: '2.5rem' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1' align='center'>
            Carga de Microemprendimiento
          </Typography>
          <Box>
            <Typography
              variant='h2'
              sx={{ fontSize: '1.25rem', fontWeight: '400' }}
              align='center'
              mt={'2rem'}
            >
              Completá el formulario para cargar un Microemprendimiento
            </Typography>
            <LoadForm />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
