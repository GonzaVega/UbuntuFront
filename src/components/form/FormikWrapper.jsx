import FormikController from '@/components/form/FormikController';
import { Box, Button, Container } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().required('Ingresa tu email').email('Ingresa un email válido'),
  job: Yup.string().required('Selecciona tu trabajo'),
  description: Yup.string().required('Ingresa una descripción').max(300, 'Máximo 300 caracteres'),
});

const choices = [
  { value: 'front-end', label: 'Front-end' },
  { value: 'back-end', label: 'Back-end' },
];

export default function FormikWrapper() {
  return (
    <Container>
      <Box my={'3rem'}>
        <Formik
          initialValues={{
            email: '',
            job: '',
            description: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <FormikController
                id='email'
                control='text'
                type='email'
                label='Email*'
                name='email'
                error={touched.email && Boolean(errors.email)}
                helperText={'Se visualizará en el título de la aplicación'}
              />
              <FormikController
                id='job'
                control='select'
                type='job'
                label='Job*'
                name='job'
                error={touched.job && Boolean(errors.job)}
                helperText={'Selecciona tu puesto deseado'}
                options={choices}
              />
              <FormikController
                value={values.description}
                id='description'
                control='textarea'
                type='description'
                label='Descripción del microemprendimiento*'
                name='description'
                error={Boolean(errors.description)}
                helperText={'Máximo 300 caracteres'}
              />
              <Button
                variant='contained'
                fullWidth
                type='submit'
                sx={{ mt: '1rem' }}
                disableElevation
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
