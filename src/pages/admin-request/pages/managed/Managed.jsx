import Card from '@/pages/admin-request/components/Card';
import { Grid } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';

export default function Managed() {
  const { user } = useAuth();

  console.log(user.token);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: `${user.token}`,
    },
  };

  axios
    .get('http://t-ubuntu02.qi.local:31934/api/v1/microentrepreneurship/count/active', config)
    .then((response) => {
      console.log('Respuesta:', response.data);
    })
    .catch((error) => {
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
