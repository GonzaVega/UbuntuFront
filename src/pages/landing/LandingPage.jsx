import { Container } from '@mui/material';
import Goals from '@/pages/landing/components/Goals';
import Posts from '@/pages/landing/components/Posts';
import SearchBarContainer from '@/pages/landing/components/SearchBarContainer';
import Categories from '@/pages/landing/components/Categories';
import Login from '@/auth/Loginn';

function LandingPage() {
  return (
    <>
      <SearchBarContainer />
      <Container sx={{ py: '2.5rem' }}>
        <Login/>
        <Goals />
        <Categories />
        <Posts />
      </Container>
    </>
  );
}

export default LandingPage;
