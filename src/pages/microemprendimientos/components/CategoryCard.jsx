import { Card, Typography, Box, useTheme } from '@mui/material';

const CategoryCard = ({ icon, category }) => {
  const { palette } = useTheme();

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px',
          marginBottom: '12px',
          borderRadius: '16px',
          height: '72px',
          paddingLeft: '20px',
          gap: '6px',
          flexShrink: '0',
        }}
      >
        <Box
          sx={{
            marginRight: '12px',
            flex: '0 0 auto',
            borderRadius: '50%',
            overflow: 'hidden',
            width: '40px',
            height: '40px',
            border: `2px solid ${palette.success.main}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            padding: '2px',
          }}
        >
          <img
            src={icon}
            alt='Icono de la categoría'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </Box>
        <Typography variant='body1'>{category}</Typography>
      </Card>
    </>
  );
};
export default CategoryCard;
