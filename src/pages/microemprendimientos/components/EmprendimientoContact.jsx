import { useState } from 'react';
import { Grid, styled, Container, Box, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import FormikController from '@/components/form/FormikController';
import { contactSchema } from '@/schemas/formsSchema';

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
}));

const EmprendimientoContact = () => {
  const { categoryId, id } = useParams();

  const searchBarProps = {
    imageRoute: `url("../../../src/assets/images/microemprendimientos/contact/projectsContact.jpg")`,
    title: 'CONTACTO',
    text: 'Contactanos para obtener información detallada sobre como podés invertir en un futuro más sostenible',
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const formSubmitHandler = (value) => {
    console.log(value);
  };

  return (
    <>
      <SearchBarContainer
        imageRoute={searchBarProps.imageRoute}
        title={searchBarProps.title}
        text={searchBarProps.text}
      />
      <StyledContainer sx={{ paddingTop: '4.5rem', py: '2.5rem' }}>
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <Typography
            align='center'
            sx={{
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '25px',
              marginBottom: '25px',
            }}
          >
            Por favor, completá el formulario.
          </Typography>
          <Typography
            align='center'
            sx={{
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '25px',
              marginBottom: '25px',
            }}
          >
            Nos comunicaremos en breve.
          </Typography>
          <Typography variant='h5' sx={{ color: '#093C59', padding: '1.5rem', fontWeight: 600 }}>
            {id}
          </Typography>
          <Typography variant='h2'>
            Vas a contactar a Ubuntu para recibir mas información acerca del Microemprendimiento
            seleccionado.
          </Typography>
          <Box sx={{ paddingLeft: '1rem', paddingRight: '0.5rem' }}>
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={formSubmitHandler}
              isInitialValid={false}
            >
              {({ errors, touched, values, isSubmitting, isValid }) => (
                <Form>
                  <FormikController
                    id='name'
                    control='text'
                    label='Apellido y Nombre*'
                    name='name'
                    error={touched.name && Boolean(errors.name)}
                  />
                  <FormikController
                    id='email'
                    control='text'
                    label='Correo Electrónico*'
                    name='email'
                    error={touched.email && Boolean(errors.email)}
                  />
                  <FormikController
                    id='phone'
                    control='text'
                    label='Teléfono*'
                    name='phone'
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={'Con el siguiente formato +54 9 261 002 002'}
                  />
                  <FormikController
                    value={values.message}
                    id='message'
                    control='textarea'
                    label='Mensaje*'
                    name='message'
                    error={touched.message && Boolean(errors.message)}
                    helperText={'Máximo 300 caracteres'}
                    maxLength={300}
                  />

                  <Button
                    type='submit'
                    variant='contained'
                    sx={{ textTransform: 'none' }}
                    fullWidth
                    disableElevation
                    disabled={isSubmitting || !isValid}
                  >
                    Enviar
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default EmprendimientoContact;
