import { useEffect, useState } from 'react';
import { Container, Typography, Box, styled } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import CategoryCard from '@/pages/microemprendimientos/components/categories/CategoryCard';
import { baseURLDevelop, baseURLDeployed } from '@/helpers/baseURL';

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

const VisitorMicroentrepreneurship = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState({});
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

  const searchBarProps = {
    imageRoute: `url("../src/assets/images/microemprendimientos/imagen_microemprendimientos.jpg")`,
    title: 'MICROEMPRENDIMIENTOS',
    subtitle: 'Invertí sostenible',
    text: 'Explorá las categorías y encontrá la inversión sostenible que mejor se ajuste a tus metas financieras',
  };

  const assignCategoryImages = (categoriesData) => {
    const categoriesWithImages = categoriesData.map((category) => {
      let image;
      const defaultImage = 'no image assigned';

      switch (true) {
        case category.name.includes('Economía'):
          image = socialEconomyIcon;
          break;
        case category.name.includes('Agroecología'):
          image = agroecologyIcon;
          break;
        case category.name.includes('Conservación'):
          image = conservationIcon;
          break;
        case category.name.includes('Empresas'):
          image = circularEconomyIcon;
          break;
        default:
          image = defaultImage;
          break;
      }

      return {
        id: category.id,
        name: category.name,
        image,
      };
    });

    return categoriesWithImages;
  };

  const categoriesFetch = async () => {
    try {
      const response = await axios.get(`${baseURLDevelop}/api/v1/category/all`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const filteredCategories = response.data.filter((category) => category.name.length > 5);
      const categoriesWithImages = assignCategoryImages(filteredCategories);

      console.log(filteredCategories);

      setCategories(categoriesWithImages);
      return response.data;
    } catch (error) {
      setError(true);
      console.error(error.message);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    categoriesFetch();
    console.log('useEffect disparado');
  }, []);

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
        {categories?.map((category) => (
          <Link
            to={`${encodeURIComponent(category.name)}`}
            state={{ categoryId: category.id, categoryName: category.name }}
            key={category.id}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <CategoryCard
              icon={category.image}
              category={category.name}
              isSelected={selectedCategories[category.name]}
              id={category.id}
            />
          </Link>
        ))}
      </StyledContainer>
    </>
  );
};

export default VisitorMicroentrepreneurship;
