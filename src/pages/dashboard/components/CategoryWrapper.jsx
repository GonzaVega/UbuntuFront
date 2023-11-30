import { Box, Divider, Typography, useTheme } from '@mui/material';

export default function CategoryWrapper({ children }) {
  const { palette } = useTheme();
  return (
    <Box bgcolor='lightGray.main' mt='2rem' borderRadius={'0.5rem'}>
      <Box padding={'1rem'}>
        <Typography
          textAlign={'center'}
          variant='h2'
          color={palette.primary.main}
          sx={{ fontSize: '1.25rem' }}
        >
          Microemprendimientos por categoría
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'success.main', height: '2px' }} />
      <Box padding={' 1rem 1.25rem'}>{children}</Box>
    </Box>
  );
}
