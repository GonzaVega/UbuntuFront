import { Grid, Box, Typography, useTheme } from '@mui/material';

const MyGridComponent = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{ backgroundColor: palette.primary.main }}>
      <Grid container spacing={3}>
        <Typography>Nuevos Microemprendimientos</Typography>
        <Typography>100</Typography>
      </Grid>
    </Box>
  );
};

export default MyGridComponent;
