import Card from '@/pages/admin-request/components/Card';
import { Grid } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import useFetch from '@/hooks/useFetch';
import instance from '@/helpers/axiosConfig';
import axios from 'axios';

export default function Managed() {
  const { user } = useAuth();

  console.log(user.token);

  // const {
  //   data: microenterprises,
  //   loading,
  //   error,
  // } = useFetch({
  //   queryFn: async (abortController) =>
  //     await instance.get('/microentrepreneurship/count/active', {
  //       signal: abortController.signal,
  //       token: user.token,
  //     }),
  // });

  // console.log(microenterprises, loading);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: `${user.token}`, // Enviar el token en el formato 'Bearer <token>'
      // Puedes ajustar el nombre del encabezado según los requisitos de tu API
    },
  };

  // Realizar la solicitud GET con Axios
  axios
    .get('http://localhost:8080/api/v1/microentrepreneurship/count/active', config)
    .then((response) => {
      // Manejar la respuesta exitosa aquí
      console.log('Respuesta:', response.data);
    })
    .catch((error) => {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error('Error al obtener datos:', error);
    });

  return (
    <Grid container mt={'2rem'} spacing={2}>
      <Card date={'20/08/2023'} title={'Nombre Microemprendimiento'} managed />
      <Card date={'20/08/2023'} title={'Nombre Microemprendimiento'} managed />
      <Card date={'20/08/2023'} title={'Nombre Microemprendimiento'} managed />
      <Card date={'20/08/2023'} title={'Nombre Microemprendimiento'} managed />
      <Card date={'20/08/2023'} title={'Nombre Microemprendimiento'} managed />
    </Grid>
  );
}
