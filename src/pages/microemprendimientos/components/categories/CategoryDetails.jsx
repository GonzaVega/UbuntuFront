import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, styled, Container, Grid } from '@mui/material';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import EntrepreneurshipCard from '@/pages/microemprendimientos/components/visitor-entrepreneurships/EntrepreneurshipCard';
// import projectItems from '@/mocks/microentrepreneuships.json';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import useFetch from '@/hooks/useFetch';

const StyledContainerCategories = styled(Container)(({ theme }) => ({
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
  top: '-4500px',
  right: '-2350px',
  width: '300%',
  height: '300%',
  borderRadius: '50%',
  backgroundColor: 'white',
  transform: 'rotate(45deg)',
  zIndex: -1,
}));

const CategoryDetails = ({ category, description, id }) => {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState({});

  const microEntrepreneurshipService = new MicroEntrepreneurshipService();
  const {
    data: results,
    loading,
    error,
  } = useFetch({
    queryFn: ({ abortController }) =>
      microEntrepreneurshipService.find({ searchParams: {}, abortController }),
  });
  console.log(category, id);

  const searchBarProps = {
    imageRoute: `url("../src/assets/images/microemprendimientos/imagen_microemprendimientos.jpg")`,
    title: 'MICROEMPRENDIMIENTOS',
    subtitle: 'Invertí sostenible',
    text: 'Explorá las categorías y encontrá la inversión sostenible que mejor se ajuste a tus metas financieras',
  };

  const loadCategoryHandler = () => {
    //esto esta pensado para que aca llamemos al hook useFetch y traernos los datos de la categoria especifica.
    const categoryDummyData = {
      name: 'Agroecología-Orgánicos-Alimentación saludable',
      description:
        'Conectate con Microemprendimientos que respetan la tierra y priorizan la salud, a través de prácticas agrícolas limpias y alimentos nutritivos.',
    };
    setCategoryData(categoryDummyData);
  };

  useEffect(() => loadCategoryHandler(), []);

  return (
    <>
      <SearchBarContainer
        imageRoute={searchBarProps.imageRoute}
        title={searchBarProps.title}
        subtitle={searchBarProps.subtitle}
        text={searchBarProps.text}
      />
      <StyledContainerCategories sx={{ py: '2.5rem' }}>
        <Background />
        <CircleCut />
        <Box
          sx={{
            justifyContent: 'center',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '25px 0px 35px 0px',
          }}
        >
          <Typography
            align='center'
            sx={{
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '25px',
            }}
          >
            Categorías
          </Typography>
        </Box>
        <Typography variant='h2' align='center' color='#093C59' sx={{ pb: '20px' }}>
          {categoryId}
        </Typography>
        <Typography align='center' sx={{ pb: '20px' }}>
          {categoryData.description}
        </Typography>
        <Grid container spacing={2}>
          {results?.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <EntrepreneurshipCard
                key={result.id}
                id={result.id}
                title={result.nombre}
                establishmentType={result.subCategoria}
                category={result.categoria.nombre}
                location={`${result.ciudad}, ${result.provincia}, ${result.pais}`}
                description={result.descripcion}
                additionalInfo={result.informacion_adicional}
                images={result.imagenes}
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainerCategories>
    </>
  );
};

export default CategoryDetails;
