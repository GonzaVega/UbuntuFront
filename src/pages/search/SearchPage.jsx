import { ArrowDownIcon, LocationIcon } from '@/components/icons';
import SearchBar from '@/components/searchBar/SearchBar';
import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';

const results = [
  {
    title: 'EcoSenda',
    subtitle: 'Finca agroecológica',
    description:
      'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
    about:
      'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
    picture:
      'https://s3-alpha-sig.figma.com/img/68a6/c5bd/b5a3ad944d19f62052c903640efbe019?Expires=1700438400&Signature=XZBMGh3wxGUZAY~k-TYKhJL0gWEDfg4NEzgk2Kvf3C0Boi5bRsGou2mXjJS~2NR7oLmu04ZcSmfo2CX0dWdrN9WPnZP~YUUn49vDB9kB2jNisoOdqAfDW6txFsmoyjWw1UrioknwVt90kQ-wWeaSlzDFpQjuPi0jnzFKvCRKIH3SvBjdLTlf~fLvLpi2-ZjQhxhEsizPG63bSC1TAvGbmeK1tbFSMybNNff1MGjaVu42xiz-2QmusD5vosfRNS~wee9g8DEP9VHIMEol3dgH91Axwwkju36v84toW~WR1N3VE7u1vZN1yqb8v-EBl4pRg2cgpAx~4R0sxzMqnTtodw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    category: 'Agroecología/Orgánicos/Alimentación saludable',
    location: 'Tunuyán, Mendoza, Argentina',
  },
  {
    title: 'EcoSenda',
    subtitle: 'Finca agroecológica',
    description:
      'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
    about:
      'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
    picture:
      'https://s3-alpha-sig.figma.com/img/68a6/c5bd/b5a3ad944d19f62052c903640efbe019?Expires=1700438400&Signature=XZBMGh3wxGUZAY~k-TYKhJL0gWEDfg4NEzgk2Kvf3C0Boi5bRsGou2mXjJS~2NR7oLmu04ZcSmfo2CX0dWdrN9WPnZP~YUUn49vDB9kB2jNisoOdqAfDW6txFsmoyjWw1UrioknwVt90kQ-wWeaSlzDFpQjuPi0jnzFKvCRKIH3SvBjdLTlf~fLvLpi2-ZjQhxhEsizPG63bSC1TAvGbmeK1tbFSMybNNff1MGjaVu42xiz-2QmusD5vosfRNS~wee9g8DEP9VHIMEol3dgH91Axwwkju36v84toW~WR1N3VE7u1vZN1yqb8v-EBl4pRg2cgpAx~4R0sxzMqnTtodw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    category: 'Agroecología/Orgánicos/Alimentación saludable',
    location: 'Tunuyán, Mendoza, Argentina',
  },
  {
    title: 'EcoSenda',
    subtitle: 'Finca agroecológica',
    description:
      'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
    about:
      'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
    picture:
      'https://s3-alpha-sig.figma.com/img/68a6/c5bd/b5a3ad944d19f62052c903640efbe019?Expires=1700438400&Signature=XZBMGh3wxGUZAY~k-TYKhJL0gWEDfg4NEzgk2Kvf3C0Boi5bRsGou2mXjJS~2NR7oLmu04ZcSmfo2CX0dWdrN9WPnZP~YUUn49vDB9kB2jNisoOdqAfDW6txFsmoyjWw1UrioknwVt90kQ-wWeaSlzDFpQjuPi0jnzFKvCRKIH3SvBjdLTlf~fLvLpi2-ZjQhxhEsizPG63bSC1TAvGbmeK1tbFSMybNNff1MGjaVu42xiz-2QmusD5vosfRNS~wee9g8DEP9VHIMEol3dgH91Axwwkju36v84toW~WR1N3VE7u1vZN1yqb8v-EBl4pRg2cgpAx~4R0sxzMqnTtodw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    category: 'Agroecología/Orgánicos/Alimentación saludable',
    location: 'Tunuyán, Mendoza, Argentina',
  },
  {
    title: 'EcoSenda',
    subtitle: 'Finca agroecológica',
    description:
      'Promueven un modelo de agricultura sostenible, protegiendo el medio ambiente, el agua y las semillas autóctonas. Cultivan frutas, verduras, plantas medicinales y crean derivados. Editan también contenidos educativos, gestionan un banco de semillas y comercializan o intercambian excedentes.',
    about:
      'Nació del sueño de restaurar la salud y adoptar un estilo de vida ideal. Este proyecto familiar creció fundamentado en la permacultura, biodinámica y agroecología, comprometiéndose con la soberanía alimentaria, el bienestar, el regreso al campo, la venta directa y la dignidad de la vida campesina.',
    picture:
      'https://s3-alpha-sig.figma.com/img/68a6/c5bd/b5a3ad944d19f62052c903640efbe019?Expires=1700438400&Signature=XZBMGh3wxGUZAY~k-TYKhJL0gWEDfg4NEzgk2Kvf3C0Boi5bRsGou2mXjJS~2NR7oLmu04ZcSmfo2CX0dWdrN9WPnZP~YUUn49vDB9kB2jNisoOdqAfDW6txFsmoyjWw1UrioknwVt90kQ-wWeaSlzDFpQjuPi0jnzFKvCRKIH3SvBjdLTlf~fLvLpi2-ZjQhxhEsizPG63bSC1TAvGbmeK1tbFSMybNNff1MGjaVu42xiz-2QmusD5vosfRNS~wee9g8DEP9VHIMEol3dgH91Axwwkju36v84toW~WR1N3VE7u1vZN1yqb8v-EBl4pRg2cgpAx~4R0sxzMqnTtodw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    category: 'Agroecología/Orgánicos/Alimentación saludable',
    location: 'Tunuyán, Mendoza, Argentina',
  },
];

export default function SearchPage() {
  return (
    <Container component='main'>
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
            <Stack spacing='1rem'>
              {results.map((result, index) => (
                <Card key={index} {...result} />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

function Card({ title, subtitle, category, picture, location }) {
  const { palette } = useTheme();
  return (
    <Box
      bgcolor={palette.lightGray.main}
      sx={{
        p: '1rem 1rem 0.5rem',
        borderRadius: '1rem',
      }}
    >
      <Box mb='1.5rem'>
        <img
          src={picture}
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
          {title}
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
          {subtitle}
        </Typography>

        <Typography variant='body2' component='span' mt='0.5rem'>
          {category}
        </Typography>
      </Stack>
      <Stack direction='row' spacing='0.25rem' alignItems='center' mt='1rem'>
        <LocationIcon />
        <Typography variant='body2' component='span'>
          {location}
        </Typography>
      </Stack>
      <Box mt='1rem'>
        <ArrowDownIcon />
      </Box>
    </Box>
  );
}
