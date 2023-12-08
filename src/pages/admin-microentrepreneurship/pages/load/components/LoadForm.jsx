import FormikController from '@/components/form/FormikController';
import { microentrepreneurshipSchema } from '@/schemas/formsSchema';
import { Box, Button } from '@mui/material';
import { Form, Formik } from 'formik';

const countries = [
  {
    value: 'pe',
    label: 'Perú',
  },
  {
    value: 'co',
    label: 'Colombia',
  },
  {
    value: 'mx',
    label: 'México',
  },
  {
    value: 'us',
    label: 'Estados Unidos',
  },
  {
    value: 'ar',
    label: 'Argentina',
  },
  {
    value: 'ven',
    label: 'Venezuela',
  },
];

const states = [
  {
    value: 'Buenos aires',
    label: 'Buenos Aires',
  },
  {
    value: 'Cordoba',
    label: 'Cordoba',
  },
  {
    value: 'Mendoza',
    label: 'Mendoza',
  },
  {
    value: 'San Luis',
    label: 'San Luis',
  },
];

const categories = [
  {
    value: 'Economía social/Desarrollo local/ Inclusión financiera',
    label: 'Economía social/Desarrollo local/ Inclusión financiera',
  },
  {
    value: 'Agroecología/Orgánicos/Alimentación saludable',
    label: 'Agroecología/Orgánicos/Alimentación saludable',
  },
  {
    value: 'Conservación/Regeneración/Servicios ecosistémicos',
    label: 'Conservación/Regeneración/Servicios ecosistémicos',
  },
  {
    value: 'Empresas/Organismos de impacto/ Economía circular',
    label: 'Empresas/Organismos de impacto/ Economía circular',
  },
];

export default function LoadForm() {
  return (
    <Box mt='1.5rem'>
      <Formik
        initialValues={{
          name: '',
          category: '',
          subcategory: '',
          country: '',
          state: '',
          city: '',
          description: '',
          moreInfo: '',
          images: [],
        }}
        validationSchema={microentrepreneurshipSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => setSubmitting(false), 2000);
        }}
        isInitialValid={false}
      >
        {({ errors, touched, values, isSubmitting, isValid, setFieldValue }) => (
          <Form>
            <FormikController
              id='name'
              control='text'
              label='Nombre del Microemprendimiento*'
              name='name'
              error={touched.name && Boolean(errors.name)}
              helperText={'Se visualizará en el título de la publicación'}
            />
            <FormikController
              id='category'
              control='select'
              label='Categoría'
              name='category'
              error={touched.category && Boolean(errors.category)}
              helperText={'Seleccioná la categoría del Microemprendimiento'}
              options={categories}
            />
            <FormikController
              id='subcategory'
              control='text'
              label='Subcategoría*'
              name='subcategory'
              error={touched.subcategory && Boolean(errors.subcategory)}
              helperText={'Escribi la subcategoría del Microemprendimiento'}
            />
            <FormikController
              id='country'
              control='select'
              label='Pais*'
              name='country'
              error={touched.country && Boolean(errors.country)}
              helperText={'Seleccioná un País de la lista'}
              options={countries}
            />
            <FormikController
              id='state'
              control='select'
              label='Provincia/Estado*'
              name='state'
              error={touched.state && Boolean(errors.state)}
              helperText={'Seleccioná una Provincia/Estado de la lista'}
              options={states}
            />
            <FormikController
              id='city'
              control='text'
              label='Ciudad*'
              name='city'
              error={touched.city && Boolean(errors.city)}
              helperText={'Sin abreviaturas, nombre completo'}
            />
            <FormikController
              value={values.description}
              id='description'
              control='textarea'
              label='Descripción del microemprendimiento*'
              name='description'
              error={touched.description && Boolean(errors.description)}
              helperText={'Máximo 300 caracteres'}
              maxLength={300}
            />
            <FormikController
              value={values.moreInfo}
              id='moreInfo'
              control='textarea'
              label='Mas información del Microemprendedor*'
              name='moreInfo'
              error={touched.moreInfo && Boolean(errors.moreInfo)}
              helperText={'Máximo 300 caracteres'}
              maxLength={300}
            />
            <FormikController
              values={values.images}
              control='file'
              id='images'
              name='images'
              error={Boolean(errors.images)}
              setFieldValue={setFieldValue}
            />
            <Button
              type='submit'
              variant='contained'
              sx={{ textTransform: 'none' }}
              fullWidth
              disableElevation
              disabled={isSubmitting || !isValid}
            >
              Cargar microemprendimiento
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
