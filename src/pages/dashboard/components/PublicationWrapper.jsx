import useFetch from '@/hooks/useFetch';
import ViewCard from '@/pages/dashboard/components/ViewCard';
import { Box, Skeleton, Typography } from '@mui/material';

export default function PublicationWrapper({ method }) {
  const { data, loading } = useFetch({
    queryFn: ({ abortController }) => method({ abortController }),
  });

  if (loading === true) {
    return (
      <Skeleton sx={{ height: '441px', borderRadius: '0.5rem', my: '3rem', transform: 'none' }} />
    );
  }
  return (
    <Box my={'3rem'}>
      <Typography
        sx={{ fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.875rem' }}
        textAlign={'center'}
      >
        Visualizaciones por Publicación
      </Typography>
      <Box mt={'2rem'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
        {data?.map((value, index) => (
          <ViewCard key={index} text={value.title} date={value.creationDate} value={value.views} />
        ))}
      </Box>
    </Box>
  );
}
