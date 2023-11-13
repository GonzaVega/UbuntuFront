import { Container } from '@mui/material';
import Posts from '@/components/posts/Posts';
import Goals from '@/pages/landing/components/Goals';
import SearchBarContainer from '@/pages/landing/components/SearchBarContainer';

function LandingPage() {
  return (
    <>
      <SearchBarContainer />
      <SearchBarContainer />
      <Container>
        <Goals />
        <Posts />
      </Container>
    </>
  );
}

export default LandingPage;
