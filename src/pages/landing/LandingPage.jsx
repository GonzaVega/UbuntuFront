import { Container } from '@mui/material';
import Goals from '@/pages/landing/components/Goals';
import Posts from '@/pages/landing/components/Posts';
import SearchBarContainer from '@/pages/landing/components/SearchBarContainer';
import Categories from '@/pages/landing/components/Categories';

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
