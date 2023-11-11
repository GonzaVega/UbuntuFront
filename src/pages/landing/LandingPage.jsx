import Goals from '@/pages/landing/components/Goals';
import Publicaciones from '@/pages/landing/components/Publicaciones';
import SearchBarContainer from '@/pages/landing/components/SearchBarContainer';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

function LandingPage() {
  return (
    <>
      <SearchBarContainer/>
      <Container>
        <Goals/>
        <br /><br /><br /><br />
        <p>Acá va la sección de categorías-----</p>
        <Publicaciones/>


      </Container>
    </>
  );
}

export default LandingPage;
