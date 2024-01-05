import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import NewMicroentrepreneporships from '@/pages/dashboard/components/NewMicroentrepreneporships';
import EstatisticsCard from '@/pages/dashboard/components/EstatisticsCard';
import CategoryWrapper from '@/pages/dashboard/components/CategoryWrapper';
import CategoriesCard from '@/pages/dashboard/components/CategoriesCard';
import ViewCard from '@/pages/dashboard/components/ViewCard';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';

function Dashboard() {
  const { palette } = useTheme();
  const service = new MicroEntrepreneurshipService();
  return (
    <Container>
      <Box mt={'2.5rem'}>
        <Typography variant='h1' textAlign='center'>
          Dashboard Administrador
        </Typography>
        <Typography variant='h2' textAlign='center' mt='1.5rem' mb='2rem'>
          Estadisticas Mensuales
        </Typography>
      </Box>
      <NewMicroentrepreneporships />
      <Grid container mt={'1rem'} spacing={'1.5rem'}>
        <Grid item xs={6}>
          <EstatisticsCard
            borderColor={palette.success.main}
            text={'Gestionados'}
            method={service.findManaged}
          />
        </Grid>
        <Grid item xs={6}>
          <EstatisticsCard
            borderColor={palette.warning.main}
            text={'No gestionados'}
            value={service.findUnmanaged}
          />
        </Grid>
      </Grid>
      <CategoryWrapper>
        <CategoriesCard
          text={'Economía social/Desarrollo local/Inclusión financiera'}
          value={'40'}
        />
        <CategoriesCard
          text={'Economía social/Desarrollo local/Inclusión financiera'}
          value={'40'}
        />
        <CategoriesCard
          text={'Economía social/Desarrollo local/Inclusión financiera'}
          value={'40'}
        />
        <CategoriesCard
          text={'Economía social/Desarrollo local/Inclusión financiera'}
          value={'40'}
        />
      </CategoryWrapper>
      <Box my={'3rem'}>
        <Typography
          sx={{ fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.875rem' }}
          textAlign={'center'}
        >
          Visualizaciones por Publicación
        </Typography>
        <Box mt={'2rem'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
          <ViewCard
            text={'Inversiones Éticas: Más que ganacias'}
            value={'50'}
            date={'17/04/2023'}
          />
          <ViewCard
            text={'Inversiones Éticas: Más que ganacias'}
            value={'50'}
            date={'17/04/2023'}
          />
          <ViewCard
            text={'Inversiones Éticas: Más que ganacias'}
            value={'50'}
            date={'17/04/2023'}
          />
          <ViewCard
            text={'Inversiones Éticas: Más que ganacias'}
            value={'50'}
            date={'17/04/2023'}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
