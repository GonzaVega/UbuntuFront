import { useState } from 'react';
import { styled, Typography, Grid, Container } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { microentrepreneurshipSchema } from '@/schemas/formsSchema';
import useFetch from '@/hooks/useFetch';
import { useAuth } from '@/contexts/AuthContext';
import NoticeCard from '@/components/common/NoticeCard';

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
}));

const LoadMicroentrepreneurship = () => {
  const { user } = useAuth();
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [optionsForSelects, setOptionsForSelects] = useState({
    categories: [],
    countries: [],
    states: [],
  });
  const [formSuccess, setFormSuccess] = useState(null);

  const initialValues = {
    name: '',
    subcategory: '',
    country: '',
    state: '',
    city: '',
    description: '',
    moreInfo: '',
    images: [],
  };

  //aca podriamos usar useFetch para traernos las categorias.

  const validationSchema = microentrepreneurshipSchema;

  const formSubmitHandler = (value) => {
    //aca cambiar el estado formSuccess para que muestre las tarjetas segun error o exito.
  };

  return (
    <>
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
            Carga de Microemprendimiento
          </Typography>
          <Typography variant='h2'>
            Completá el formulario para cargar un Microemprendimiento
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={formSubmitHandler}
          >
            <Form>
              <p>Nombre del Microemprendimiento - input corto</p>
              <p>Categoría - select optionsForSelects.category</p>
              <p>Subcategoría - input corto</p>
              <p>País - select optionsForSelects.countries</p>
              <p>Provincia/Estado - select optionsForSelects.states</p>
              <p>Ciudad - input corto</p>
              <p>Descripción del Microemprendimiento - input largo </p>
              <p>Más información del Microemprendimiento - input largo</p>
              <Button type='submit' variant='contained' color='primary'>
                Cargar Microemprendimiento
              </Button>
            </Form>
          </Formik>
          {formSuccess && (
            <NoticeCard
              isOpen={true}
              handleClose={() => navigate('/')}
              success={true}
              mainMessage='Microemprendimiento cargado con éxito'
              cancelFunction={() => navigate('/')}
            />
          )}
          {!formSuccess && (
            <NoticeCard
              isOpen={true}
              handleClose={() => navigate('/')}
              success={false}
              mainMessage='Lo sentimos, el Microemprendimiento no pudo ser cargado.'
              secondaryMessage='Por favor, volvé a intentarlo.'
              cancelFunction={() => navigate('/')}
            />
          )}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default LoadMicroentrepreneurship;
