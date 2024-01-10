import { useState, useEffect } from 'react';
import NoticeCard from '@/components/common/NoticeCard';
import { useBoolean } from '@/hooks/useBoolean';
import LoadForm from '@/pages/admin-post/pages/load/components/LoadForm';
import { PublicationService } from '@/services/publication.service';
import useFetch from '@/hooks/useFetch';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import instance from '@/helpers/axiosConfig';

export default function LoadPost() {
  const navigate = useNavigate();
  const { value, setFalse, toggle } = useBoolean(false);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [dataComp, setDataComp] = useState(null);
  const [loadingComp, setLoadingComp] = useState(false);
  const [errorComp, setErrorComp] = useState(false);

  const jwt = localStorage.getItem('token');

  // const fetchData = async () => {
  //       try {
  //         console.log('fetch data running');
  //         setLoadingComp(true);

  //         const response = await instance.post(url, formDataToSend, {
  //           headers: { Authorization: `Bearer ${jwt}`, 'Content-Type': 'multipart/form-data' },
  //         });

  //         setDataComp(response.data);
  //         setLoadingComp(false);
  //       } catch (error) {
  //         setErrorComp(true);
  //         setLoadingComp(false);

  //         console.error('Error en la llamada al backend:', error);
  //       } finally {
  //         setSubmitting(false);
  //       }

  function handleSubmit(values) {
    if (values) {
      // setFormData(values);
      // setSubmitted(true);

      // const formDataToSend = new FormData();
      // formDataToSend.append('title', values?.title);
      // formDataToSend.append('description', values?.description);
      // values?.multipartImage?.forEach((file) => {
      //   formDataToSend.append('multipartImages', file, file.name);
      // });

      const formDataToSend = new FormData();
      formDataToSend.append('title', values?.title);
      formDataToSend.append('description', values?.description);

      // Verificar si existen imágenes en values y agregarlas a formDataToSend
      if (values.multipartImages && values.multipartImages.length > 0) {
        values.multipartImages.forEach((file, index) => {
          // Append each image file to formDataToSend
          formDataToSend.append(`multipartImages[${index}]`, file); // Ensure 'file' is the actual image file object
        });
      }
      console.log(values, formDataToSend);
      const url = '/publication/create';
      // const fetchData = async () => {
      //   try {
      //     console.log('fetch data running');
      //     setLoadingComp(true);

      instance.post(url, formDataToSend, {
        headers: { Authorization: `Bearer ${jwt}`, 'Content-Type': 'multipart/form-data' },
      });

      //     setDataComp(response.data);
      //     setLoadingComp(false);
      //   } catch (error) {
      //     setErrorComp(true);
      //     setLoadingComp(false);

      //     console.error('Error en la llamada al backend:', error);
      //   } finally {
      //     setSubmitting(false);
      //   }
    }
    // fetchData();
  }

  // const formDataToSend = new FormData();

  // formDataToSend.append('title', formData?.title);
  // formDataToSend.append('description', formData?.description);

  // // Agregar los archivos al FormData
  // if (formData.multipartImage && formData.multipartImage.length > 0) {
  //   for (let i = 0; i < formData.multipartImage.length; i++) {
  //     formDataToSend.append(`multipartImage${i}`, formData.multipartImage[i]);
  //   }
  // }

  // console.log(formDataToSend);

  // const prepareFormData = (values) => {
  //   // Construir un array de objetos con la clave 'multipartImage'
  //   // if (values.multipartImage && values.multipartImage.length > 0) {
  //   //   values.multipartImage.forEach((file) => {
  //   //     formDataToSend.append(`multipartImages`, file);
  //   //   });
  //   // }

  //   return formDataToSend;
  // };

  //NOTAS: si enviamos formData, que en el componente tiene la estructura que tiene que tener, no llega a la payload los objetos. Si usamos formDataToSend, no se construyen las imagenes

  // useEffect(() => {
  //   if (submitted) {
  //     console.log('este es formData', formData);

  //     const formDataToSend = prepareFormData(formData);

  //     console.log(formDataToSend);

  //     fetchData();
  //   }
  // }, [submitted, formData]);

  return (
    <Container sx={{ py: '2.5rem' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1' align='center'>
            Carga de publicación
          </Typography>
          <Box>
            <Typography
              variant='h2'
              sx={{ fontSize: '1.25rem', fontWeight: '400' }}
              align='center'
              mt={'2rem'}
            >
              Completá los datos para crear una nueva publicación
            </Typography>
            <LoadForm handleChange={handleSubmit} />
          </Box>
        </Grid>
        {/* {dataComp && !loadingComp && !errorComp && (
          <NoticeCard
            isOpen={true}
            success={true}
            handleClose={() => navigate('/admin/publicaciones')}
            mainMessage={'Publicación creada con éxito'}
          />
        )}
        {errorComp && (
          <NoticeCard
            isOpen={true}
            success={false}
            handleClose={() => navigate('/admin/publicaciones')}
            cancelFunction={() => navigate('/admin/publicaciones')}
            mainMessage={'Error en la creación de publicación, inténtalo nuevamente'}
          />
        )} */}
      </Grid>
    </Container>
  );
}
