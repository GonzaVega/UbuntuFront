import { styled, Box, Grid, Container } from '@mui/material';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import PostCard from '@/pages/landing/components/PostCard';

import POST_IMAGE_01 from '@/assets/images/post_image_01.png';
import POST_IMAGE_02 from '@/assets/images/post_image_02.png';
import POST_IMAGE_03 from '@/assets/images/post_image_03.png';

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
}));

const Background = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#226516',
  zIndex: -1,
}));

const CircleCut = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-3200px',
  right: '-1700px',
  width: '300%',
  height: '300%',
  borderRadius: '50%',
  backgroundColor: 'white',
  transform: 'rotate(45deg)',
  zIndex: -1,
}));

const Publications = () => {
  const searchBarProps = {
    imageRoute: `url("../src/assets/images/publications/publications background compressed.jpg")`,
    title: 'PUBLICACIONES',
    subtitle: 'Explorando finanzas de impacto',
    text: 'Conocé cómo decisiones financieras pueden impactar positivamente en la sociedad y el medio ambiente',
  };

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
  return (
    <>
      <SearchBarContainer
        imageRoute={searchBarProps.imageRoute}
        title={searchBarProps.title}
        subtitle={searchBarProps.subtitle}
        text={searchBarProps.text}
      />
      <StyledContainer sx={{ py: '2.5rem' }}>
        <Background />
        <CircleCut />
        <Grid item xs={12} mt='2rem'>
          <Grid container spacing={'1rem'}>
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Publications;
