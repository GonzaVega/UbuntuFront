import SearchBarBase from '@/components/common/SearchBarBase';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function search(value) {
    const query = value.trim();

    if (!query) {
      searchParams.delete('query');
      setSearchParams(searchParams);
    } else {
      searchParams.set('query', query);

      navigate({
        pathname: '/search',
        search: searchParams.toString(),
      });
    }
  }

  return (
    <>
      <SearchBarBase onSubmit={search} />
    </>
  );
}
