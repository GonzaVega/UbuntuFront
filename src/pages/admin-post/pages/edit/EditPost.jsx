import NoticeCard from '@/components/common/NoticeCard';
import { useBoolean } from '@/hooks/useBoolean';
import LoadForm from '@/pages/admin-post/pages/load/components/LoadForm';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function EditPost() {
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
            Edición de publicación
          </Typography>
          <Box>
            <Typography
              variant='h2'
              sx={{ fontSize: '1.25rem', fontWeight: '400' }}
              align='center'
              mt={'2rem'}
            >
              Modificá los datos de la publicación
            </Typography>
            <LoadForm handleChange={handleSubmit} />
          </Box>
        </Grid>
      </Grid>
      <NoticeCard
        isOpen={value}
        success={true}
        handleClose={setFalse}
        mainMessage={'Cambios guardados con éxito'}
      />
    </Container>
  );
}
