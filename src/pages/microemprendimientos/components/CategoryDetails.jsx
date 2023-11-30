import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, styled, Container, Grid } from '@mui/material';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import EmprendimientoCard from '@/pages/microemprendimientos/components/EmprendimientoCard';

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

const CategoryDetails = ({ category }) => {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [projects, setProjects] = useState([]);

  const searchBarProps = {
    imageRoute: `url("../src/assets/images/imagen_microemprendimientos.jpg")`,
    title: 'MICROEMPRENDIMIENTOS',
    subtitle: 'Invertí sostenible',
    text: 'Explorá las categorías y encontrá la inversión sostenible que mejor se ajuste a tus metas financieras',
  };

  const loadCategoryHandler = () => {
    //esto esta pensado para que aca llamemos al hook useFetch y traernos los datos de la categoria especifica.
    const categoryDummyData = {
      name: 'Agroecología - Orgánicos - Alimentación saludable',
      description:
        'Conectate con Microemprendimientos que respetan la tierra y priorizan la salud, a través de prácticas agrícolas limpias y alimentos nutritivos.',
    };
    setCategoryData(categoryDummyData);
  };

  const loadMicroemprendimientosHandler = (category) => {
    // Simulando carga de datos de microemprendimientos basados en la categoría seleccionada
    //esto esta pensado para que aca llamemos al hook useFetch y traernos los datos de la categoria especifica.
    const dummyData = [
      // Datos simulados de microemprendimientos
      {
        title: 'EcoSenda',
        establishmentType: 'Finca agroecológica',
        category: 'Agroecología - Orgánicos - Alimentación saludable',
        location: 'Tunuyán, Mendoza, Argentina',
        description:
          'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultiva frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
        additionalInfo:
          'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
        images: [
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 1.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 2.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 3.png',
        ],
      },
      {
        title: 'EcoSenda',
        establishmentType: 'Finca agroecológica',
        category: 'Agroecología - Orgánicos - Alimentación saludable',
        location: 'Tunuyán, Mendoza, Argentina',
        description:
          'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultiva frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
        additionalInfo:
          'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
        images: [
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 1.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 2.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 3.png',
        ],
      },
      {
        title: 'EcoSenda',
        establishmentType: 'Finca agroecológica',
        category: 'Agroecología - Orgánicos - Alimentación saludable',
        location: 'Tunuyán, Mendoza, Argentina',
        description:
          'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultiva frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
        additionalInfo:
          'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
        images: [
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 1.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 2.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 3.png',
        ],
      },
      {
        title: 'EcoSenda',
        establishmentType: 'Finca agroecológica',
        category: 'Agroecología - Orgánicos - Alimentación saludable',
        location: 'Tunuyán, Mendoza, Argentina',
        description:
          'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultiva frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
        additionalInfo:
          'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
        images: [
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 1.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 2.png',
          '/src/assets/images/microemprendimientos/dummysliders/dummy emprendimiento 3.png',
        ],
      },
      // Agrega más microemprendimientos según sea necesario
    ];

    setProjects(dummyData);
  };

  useEffect(() => {
    loadMicroemprendimientosHandler();
    loadCategoryHandler();
  }, []);

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
          {categoryData.name}
        </Typography>
        <Typography align='center' sx={{ pb: '20px' }}>
          {categoryData.description}
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <EmprendimientoCard
                key={index}
                title={project.title}
                establishmentType={project.establishmentType}
                category={project.category}
                location={project.location}
                description={project.description}
                additionalInfo={project.additionalInfo}
                images={project.images}
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainerCategories>
    </>
  );
};

export default CategoryDetails;
