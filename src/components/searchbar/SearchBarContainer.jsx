import SearchBar from '@/components/searchbar/SearchBar';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

export default function SearchBarContainer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url("../../src/assets/images/landing/imagen_hero.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '488px',
      }}
    >
      <Container sx={{ py: '1.5rem' }}>
        <SearchBar />
        <Typography
          variant='h3'
          component='h2'
          color={theme.palette.text.primary}
          sx={{
            color: '#FDFDFE',
            padding: '2.5rem 0 1rem 0',
          }}
        >
          FINANCIAMIENTO SOSTENIBLE
        </Typography>

        <Box
          sx={{
            width: '65%',
            minWidth: '235px',
            float: 'left',
            clear: 'both',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              color: '#FDFDFE',
            }}
          >
            Impulsamos el desarrollo de finanzas de impacto, liderando la transición hacia un modelo
            financiero sostenible
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
