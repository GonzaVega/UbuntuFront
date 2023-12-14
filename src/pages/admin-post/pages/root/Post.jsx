import { Box, Button, Container, Grid, Typography } from '@mui/material';
import POST_IMAGE_01 from '@/assets/images/post_image_01.png';
import POST_IMAGE_02 from '@/assets/images/post_image_02.png';
import POST_IMAGE_03 from '@/assets/images/post_image_03.png';
import PostCard from '@/pages/admin-post/pages/root/components/PostCard';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTES } from '@/constants/routes';

const posts = [
  {
    title: 'Inversiones Éticas: Más que ganancias',
    picture: [POST_IMAGE_01, POST_IMAGE_02, POST_IMAGE_03],
    date: '17/04/2023',
    content:
      'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
  },
  {
    title: 'Inversiones Éticas: Más que ganancias',
    picture: [POST_IMAGE_01, POST_IMAGE_02, POST_IMAGE_03],
    date: '17/04/2023',
    content:
      'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
  },
  {
    title: 'Inversiones Éticas: Más que ganancias',
    picture: [POST_IMAGE_01, POST_IMAGE_02, POST_IMAGE_03],
    date: '17/04/2023',
    content:
      'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
  },
];
export default function Post() {
  return (
    <Container>
      <Box mt={'2.5rem'}>
        <Typography variant='h1' textAlign={'center'}>
          Publicaciones
        </Typography>
        <Button
          component={Link}
          to={ADMIN_ROUTES.POSTS.LOAD}
          variant='contained'
          sx={{ textTransform: 'none', mt: '1.5rem' }}
          fullWidth
        >
          Crear Publicación
        </Button>
      </Box>
      <Box mt={'3rem'}>
        <Typography variant='h2' textAlign={'center'}>
          Publicaciones cargadas
        </Typography>
        <Grid container spacing={'1rem'} mt={'2rem'}>
          {posts.map((item) => (
            <PostCard post={item} key={item.title} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
