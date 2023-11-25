import { Container } from '@mui/material';
import Goals from '@/pages/landing/components/Goals';
import Posts from '@/pages/landing/components/Posts';
import Categories from '@/pages/landing/components/Categories';
import SearchBarContainer from '@/components/searchbar/SearchBarContainer';

function LandingPage() {
  return (
    <>
      <SearchBarContainer />
      <Container sx={{ py: '2.5rem' }}>
        <Goals />
        <Categories />
        <Posts />
      </Container>
    </>
  );
}

export default LandingPage;
