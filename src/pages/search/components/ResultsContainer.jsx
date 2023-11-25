import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import { ArrowDownIcon, LocationIcon } from '@/components/icons';
import SkeletonCard from '@/pages/search/components/SkeletonCard';
import NoResults from '@/pages/search/components/NoResults';
import useFetch from '@/hooks/useFetch';

export default function ResultsContainer({ query }) {
  const microEntrepreneurshipService = new MicroEntrepreneurshipService();
  const {
    data: results,
    loading,
    error,
  } = useFetch({
    queryFn: () => microEntrepreneurshipService.find({ searchParams: { query } }),
    dependencies: [query],
  });

  return (
    <Grid container spacing='1rem'>
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
      ) : error ? (
        <NoResults />
      ) : (
        results?.map((result, index) => <Card key={index} {...result} />)
      )}
    </Grid>
  );
}

function Card({ nombre, subCategoria, categoria, imagenes, pais, provincia, ciudad }) {
  const { palette } = useTheme();
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box
        bgcolor={palette.lightGray.main}
        sx={{
          p: '1rem 1rem 0.5rem',
          borderRadius: '1rem',
        }}
      >
        <Box mb='1.5rem'>
          <img
            src={imagenes[0]}
            style={{
              width: '100%',
              height: '8rem',
              objectFit: 'cover',
              borderRadius: '1rem',
            }}
          />
        </Box>
        <Stack alignItems='flex-start'>
          <Typography variant='h3' component='h3'>
            {nombre}
          </Typography>
          <Typography
            mt='0.25rem'
            component='span'
            color='primary'
            sx={{
              fontSize: '0.875rem',
              fontWeight: 700,
              lineHeight: '1.125rem',
            }}
          >
            {subCategoria}
          </Typography>

          <Typography variant='body2' component='span' mt='0.5rem'>
            {categoria.nombre}
          </Typography>
        </Stack>
        <Stack direction='row' spacing='0.25rem' alignItems='center' mt='1rem'>
          <LocationIcon />
          <Typography variant='body2' component='span'>
            {ciudad}, {provincia}, {pais}
          </Typography>
        </Stack>
        <Box mt='1rem'>
          <ArrowDownIcon />
        </Box>
      </Box>
    </Grid>
  );
}
