import SearchBarContainer from '@/components/searchbar/SearchBarContainer';
import CategoryCard from '@/pages/microemprendimientos/components/CategoryCard';
import { Container } from '@mui/material';

import socialEconomyIcon from '@/assets/images/social-economy.png';
import agroecologyIcon from '@/assets/images/agroecology.png';
import conservationIcon from '@/assets/images/conservation.png';
import circularEconomyIcon from '@/assets/images/circular-economy.png';

const Microemprendimientos = () => {
  const searchBarProps = {
    imageRoute: `url("../src/assets/images/imagen_microemprendimientos.jpg")`,
    title: 'MICROEMPRENDIMIENTOS',
    subtitle: 'Invertí sostenible',
    text: 'Explorá las categorías y encontrá la inversión sostenible que mejor se ajuste a tus metas financieras',
  };
  //esto deberia ser reemplazado por una llamada al endpoint de categorias, por el momento es DummyData.
  const categories = [
    {
      title: 'Economía social/Desarrollo local/ Inclusión financiera',
      image: socialEconomyIcon,
    },
    {
      title: 'Agroecología/Orgánicos/ Alimentación saludable',
      image: agroecologyIcon,
    },
    {
      title: 'Conservación/Regeneración/ Servicios ecosistémicos',
      image: conservationIcon,
    },
    {
      title: 'Empresas/Organismos de impacto/Economía circular',
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
      <Container sx={{ py: '2.5rem' }}>
        {categories.map((category) => (
          <CategoryCard key={category.title} icon={category.image} category={category.title} />
        ))}
      </Container>
    </>
  );
};

export default Microemprendimientos;
