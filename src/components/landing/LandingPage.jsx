import Goals from '@/components/landing/Goals';
import SearchBarContainer from '@/components/landing/SearchBarContainer';
import Posts from '@/components/posts/Posts';

function LandingPage() {
  return (
    <>
      <SearchBarContainer />
      <Goals />
      <Posts />
    </>
  );
}

export default LandingPage;
