import socialEconomyIcon from '@/assets/images/social-economy.png';
import agroecologyIcon from '@/assets/images/agroecology.png';
import conservationIcon from '@/assets/images/conservation.png';
import circularEconomyIcon from '@/assets/images/circular-economy.png';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

const categories = [
  {
    title: 'Economía social/Desarrollo local/ Inclusión financiera',
    image: socialEconomyIcon,
  },
  {
    title: 'Agroecología/Orgánicos/ Alimentación saludable',
    image: agroecologyIcon,
  },
  {
    title: 'Conservación/Regeneración/ Servicios ecosistémicos',
    image: conservationIcon,
  },
  {
    title: 'Empresas/Organismos de impacto/Economía circular',
    image: circularEconomyIcon,
  },
];

export default function Categories() {
  return (
    <Grid container component='section' mt='2rem'>
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h2' component='span' sx={{ fontSize: '1rem' }}>
            Microemprendimientos Ubuntu
          </Typography>
          <Typography variant='h2' component='h2'>
            Categorías
          </Typography>
          <List sx={{ mt: '1rem' }}>
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </List>
          <Box mt='1rem'>
            <Button
              variant='contained'
              sx={{
                lineHeight: '1.25rem',
                padding: '0.625rem 1.89rem',
                textTransform: 'none',
              }}
              disableElevation
            >
              Ver más categorías
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

function Category({ title, image }) {
  const { palette } = useTheme();

  return (
    <ListItem sx={{ gap: '0.5rem', px: '1.3rem' }}>
      <ListItemIcon
        sx={{
          minWidth: 'unset',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: `1px solid ${palette.secondary.main}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={image} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          sx: {
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '1.5625rem',
          },
          color: 'primary',
        }}
        sx={{
          paddingBottom: '0.25rem',
          borderBottom: `1px solid ${palette.secondary.main}`,
        }}
      />
    </ListItem>
  );
}
