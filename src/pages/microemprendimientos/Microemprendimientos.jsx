import { useState } from 'react';
import { Container, Typography, Box, styled, useTheme } from '@mui/material';
import { useNavigate, useParams, Link } from 'react-router-dom';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import CategoryCard from '@/pages/microemprendimientos/components/CategoryCard';

import socialEconomyIcon from '@/assets/images/social-economy.png';
import agroecologyIcon from '@/assets/images/agroecology.png';
import conservationIcon from '@/assets/images/conservation.png';
import circularEconomyIcon from '@/assets/images/circular-economy.png';

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
  top: '-1080px',
  right: '-700px',
  width: '300%',
  height: '300%',
  borderRadius: '50%',
  backgroundColor: 'white',
  transform: 'rotate(45deg)',
  zIndex: -1,
}));

const Microemprendimientos = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [selectedCategories, setSelectedCategories] = useState({});

  const searchBarProps = {
    imageRoute: `url("../src/assets/images/imagen_microemprendimientos.jpg")`,
    title: 'MICROEMPRENDIMIENTOS',
    subtitle: 'Invertí sostenible',
    text: 'Explorá las categorías y encontrá la inversión sostenible que mejor se ajuste a tus metas financieras',
  };
  //esto deberia ser reemplazado por una llamada al endpoint de categorias, por el momento es DummyData.
  const categories = [
    {
      id: '0',
      title: 'Economía social - Desarrollo local - Inclusión financiera',
      image: socialEconomyIcon,
    },
    {
      id: '1',
      title: 'Agroecología - Orgánicos - Alimentación saludable',
      image: agroecologyIcon,
    },
    {
      id: '2',
      title: 'Conservación - Regeneración - Servicios ecosistémicos',
      image: conservationIcon,
    },
    {
      id: '3',
      title: 'Empresas - Organismos de impacto - Economía circular',
      image: circularEconomyIcon,
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
        <Box
          sx={{
            height: '24px',
            justifyContent: 'center',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            align='center'
            sx={{
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '25px',
              marginBottom: '25px',
            }}
          >
            Categorías
          </Typography>
        </Box>
        {categories.map((category) => (
          <Link
            to={encodeURIComponent(category.title)}
            key={category.title}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <CategoryCard
              icon={category.image}
              category={category.title}
              isSelected={selectedCategories[category.title]}
            />
          </Link>
        ))}
      </StyledContainer>
    </>
  );
};

export default Microemprendimientos;
