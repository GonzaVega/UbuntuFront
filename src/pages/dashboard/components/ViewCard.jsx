import { EyeIcon } from '@/components/icons';
import { Grid, Typography, useTheme } from '@mui/material';

export default function ViewCard({ value, text, date }) {
  const { palette } = useTheme();
  return (
    <Grid
      container
      sx={{
        borderRadius: '0.5rem',
        borderColor: palette.primary.main,
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '0.5rem',
      }}
    >
      <Grid item xs={9}>
        <Typography variant='body1' sx={{ fontWeight: '600' }}>
          {text}
        </Typography>
        <Typography variant='caption' sx={{ fontWeight: '500', lineHeight: '1.5625rem' }}>
          {date}
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <EyeIcon />
        <Typography variant='h3' sx={{ fontWeight: '700' }}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}
