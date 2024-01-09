import NoticeCard from '@/components/common/NoticeCard';
import { useBoolean } from '@/hooks/useBoolean';
import LoadForm from '@/pages/admin-microentrepreneurship/pages/load/components/LoadForm';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';

export default function LoadMicroentrepreneurship() {
  const jwt = localStorage.getItem('token');
  const { value, setFalse, toggle } = useBoolean(false);
  const [success, setSuccess] = useState(true);
  const [message, setMessage] = useState('');

  async function handleSubmit(values, { setSubmitting }) {
    const { images, state: province, ...rest } = values;

    const formData = new FormData();
    formData.append('microentrepreneurshipJson', JSON.stringify({ province, ...rest }));
    images.forEach((file) => {
      formData.append('files', file, file.name);
    });

    try {
      const service = new MicroEntrepreneurshipService();
      await service.create({ payload: {}, abortController: new AbortController(), formData, jwt });
      setSuccess(true);
      setMessage('Microemprendimiento cargado con éxito');
    } catch (error) {
      setSuccess(false);
      setMessage('Lo sentimos, el Microemprendimiento no pudo ser cargado.');
      console.log(error);
    } finally {
      setSubmitting(false);
      toggle((preValue) => !preValue);
    }
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
        success={success}
        handleClose={setFalse}
        mainMessage={message}
        cancelFunction={setFalse}
      />
    </Container>
  );
}
