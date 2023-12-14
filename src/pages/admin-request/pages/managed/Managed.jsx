import Card from '@/pages/admin-request/components/Card';
import { Grid } from '@mui/material';

export default function Managed() {
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
