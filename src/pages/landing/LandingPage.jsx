import { Container } from '@mui/material';
import Goals from '@/pages/landing/components/Goals';
import Posts from '@/pages/landing/components/Posts';
import SearchBarContainer from '@/pages/landing/components/SearchBarContainer';

function LandingPage() {
  return (
    <>
      <SearchBarContainer />
      <Container>
        <Goals />
        <Posts />
      </Container>
    </>
  );
}

export default LandingPage;
