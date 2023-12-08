import { useState } from 'react';
import { Grid, styled, Container, Box, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
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

  const validationSchema = contactSchema;

  const formSubmitHandler = (value) => {};

  return (
    <>
      <SearchBarContainer
        imageRoute={searchBarProps.imageRoute}
        title={searchBarProps.title}
        text={searchBarProps.text}
      />
      <StyledContainer sx={{ paddingTop: '4.5rem' }}>
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={formSubmitHandler}
          >
            <Form>
              <p>Input corto apellido y nombre</p>
              <p>input corto email</p>
              <p>input corto telefono</p>
              <p>input largo mensaje</p>
              <Button type='submit' variant='contained' color='primary'>
                Enviar
              </Button>
            </Form>
          </Formik>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default EmprendimientoContact;
