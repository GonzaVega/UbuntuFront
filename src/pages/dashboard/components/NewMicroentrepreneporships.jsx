import { Grid, Box, Typography, useTheme } from '@mui/material';

const NewMicroentrepreneporships = () => {
  const { palette } = useTheme();
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