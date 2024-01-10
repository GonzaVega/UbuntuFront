import FormikController from '@/components/form/FormikController';
import { publicationsSchema } from '@/schemas/formsSchema';
import { Box, Button } from '@mui/material';
import { Form, Formik } from 'formik';

export default function LoadForm({ handleChange }) {
  return (
    <Box mt={'1.5rem'}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          multipartImages: [],
        }}
        validationSchema={publicationsSchema}
        onSubmit={(values) => {
          handleChange(values);
        }}
        isInitialValid={false}
      >
        {({ errors, touched, values, isSubmitting, isValid, setFieldValue }) => (
          <Form>
            <FormikController
              id='title'
              control='text'
              label='Titulo*'
              name='title'
              error={touched.title && Boolean(errors.title)}
              helperText={'Se visualizará en el título de la publicación'}
            />

            <FormikController
              id='description'
              control='textarea'
              label='Contenido de la publicación*'
              name='description'
              error={touched.description && Boolean(errors.description)}
              helperText={'Máximo 2000 caracteres'}
              value={values.description}
              maxLength={2000}
            />
            <FormikController
              values={values.multipartImages}
              control='file'
              id='multipartImages'
              name='multipartImages'
              error={Boolean(errors.multipartImages)}
              setFieldValue={setFieldValue}
              rows={true}
            />
            <Button
              type='submit'
              variant='contained'
              sx={{ textTransform: 'none' }}
              fullWidth
              disableElevation
              disabled={isSubmitting || !isValid}
            >
              Crear publicación
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
