import { useState } from 'react';
import { styled, Typography, Grid, Container } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { microentrepreneurshipSchema } from '@/schemas/formsSchema';
import useFetch from '@/hooks/useFetch';
import NoticeCard from '@/components/common/NoticeCard';
import { useAuth } from '@/contexts/AuthContext';

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
}));

const EditMicroentrepreneurship = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [optionsForSelects, setOptionsForSelects] = useState({
    categories: [],
    countries: [],
    states: [],
  });
  const [formSuccess, setFormSuccess] = useState(null);

  //aca traer valores actuales del item que vamos a editar.
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
            Edición de Microemprendimiento
          </Typography>
          <Typography variant='h2'>Editá el formulario de carga del Microemprendimiento</Typography>
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
                Guardar Cambios
              </Button>
            </Form>
          </Formik>
          {formSuccess && (
            <NoticeCard
              isOpen={true}
              handleClose={() => navigate('/')}
              success={true}
              mainMessage='Cambios guardados con éxito'
              cancelFunction={() => navigate('/')}
            />
          )}
          {!formSuccess && (
            <NoticeCard
              isOpen={true}
              handleClose={() => navigate('/')}
              success={false}
              mainMessage='Lo sentimos, los cambios no pudieron ser guardados.'
              secondaryMessage='Por favor, volvé a intentarlo.'
              cancelFunction={() => navigate('/')}
            />
          )}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default EditMicroentrepreneurship;
