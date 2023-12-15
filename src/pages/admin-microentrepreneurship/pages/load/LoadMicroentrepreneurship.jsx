import NoticeCard from '@/components/common/NoticeCard';
import { useBoolean } from '@/hooks/useBoolean';
import LoadForm from '@/pages/admin-microentrepreneurship/pages/load/components/LoadForm';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function LoadMicroentrepreneurship() {
  const { value, setFalse, toggle } = useBoolean(false);

  function handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      toggle((preValue) => !preValue);
      setSubmitting(false);
    }, 500);
  }

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
            <LoadForm onSubmit={handleSubmit} />
          </Box>
        </Grid>
      </Grid>
      <NoticeCard
        isOpen={value}
        success={true}
        handleClose={setFalse}
        mainMessage={'Microemprendimiento cargado con éxito'}
      />
    </Container>
  );
}
