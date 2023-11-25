/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { ArrowDownIcon, LocationIcon } from '@/components/icons';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import NoResults from '@/pages/search/components/NoResults';
import SearchBar from '@/components/searchbar/SearchBar';
import useFetch from '@/hooks/useFetch';
import SkeletonCard from '@/pages/search/components/SkeletonCard';

export default function SearchPage() {
  const microEntrepreneurshipService = new MicroEntrepreneurshipService();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState();
  const {
    data: results,
    loading,
    error,
  } = useFetch({
    queryFn: () => microEntrepreneurshipService.find({ searchParams: { query } }),
    dependencies: [query],
  });

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  return (
    <Container component='main' sx={{ py: '2.5rem' }}>
      <Grid container component='section' mt='1.5rem'>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid container component='section' mt='3.5rem'>
        <Grid item xs={12} textAlign='center'>
          <Box>
            <Typography
              component='h1'
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: '1.875rem',
              }}
            >
              Resultados de tu búsqueda
            </Typography>
          </Box>
          <Box mt='2rem'>
            <Grid container spacing={'1rem'}>
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              ) : error ? (
                <NoResults />
              ) : (
                results?.map((result, index) => <Card key={index} {...result} />)
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
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
