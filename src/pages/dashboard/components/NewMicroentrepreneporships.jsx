import useFetch from '@/hooks/useFetch';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import { Grid, Box, Typography, useTheme } from '@mui/material';

const NewMicroentrepreneporships = () => {
  const { palette } = useTheme();
  const service = new MicroEntrepreneurshipService();
  const { data, loading } = useFetch({
    queryFn: ({ abortController }) => service.findLatest({ abortController }),
  });
  console.log(data, loading);
  return (
    <Box
      sx={{
        backgroundColor: palette.primary.main,

        borderRadius: '8px',
        justifyContent: 'space-between',
        padding: '8px 16px',
        width: '100%',
      }}
    >
      <Grid container alignItems='center'>
        <Grid item xs={10}>
          <Typography
            variant='h1'
            sx={{
              fontFamily: 'Lato',
              fontWeight: 700,
              fontSize: '1.25rem',
              lineHeight: '1.5625rem',
              color: 'background.paper',
            }}
          >
            Nuevos Microemprendimientos
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant='h1'
            sx={{
              fontWeight: 700,
              fontSize: '22px',
              lineHeight: '25px',
              textAlign: 'right',
              color: '#FDFDFE',
            }}
          >
            100
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewMicroentrepreneporships;
