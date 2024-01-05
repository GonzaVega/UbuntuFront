import useFetch from '@/hooks/useFetch';
import { Box, Typography, Divider } from '@mui/material';

export default function EstatisticsCard({ borderColor, text, method }) {
  const { data, loading } = useFetch({
    queryFn: ({ abortController }) => method({ abortController }),
  });
  console.log(data, loading);
  return (
    <Box sx={{ padding: '0.5rem', border: `2px solid ${borderColor}`, borderRadius: '0.5rem' }}>
      <Box>
        <Typography variant='h3' sx={{ fontWeight: '400' }}>
          {text}
        </Typography>
        <Divider
          sx={{ width: '35%', backgroundColor: borderColor, my: '0.2rem ', height: '2px' }}
        />
        <Typography sx={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.5625rem' }}>
          {loading ? null : data}
        </Typography>
      </Box>
    </Box>
  );
}
