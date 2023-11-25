import { Card, Icon, Typography, Box, useTheme } from '@mui/material';

const CategoryCard = ({ icon, category }) => {
  const { palette } = useTheme();

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px',
          marginBottom: '12px', // Añadir separación entre tarjetas
          borderRadius: '10px', // Bordes redondeados
        }}
      >
        <Box
          sx={{
            marginRight: '12px',
            flex: '0 0 auto',
            borderRadius: '50%', // Bordes redondeados para el contenedor del icono
            overflow: 'hidden', // Evitar que la imagen se salga del contenedor
            width: '40px',
            height: '40px',
            border: `2px solid ${palette.success.main}`, // Borde verde
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box', // Considerar el borde en las dimensiones
            padding: '2px', // Espacio entre el borde verde y la imagen
          }}
        >
          <img
            src={icon}
            alt='Icono de la categoría'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ajusta la imagen para que se ajuste dentro del círculo
              borderRadius: '50%', // Añade bordes redondeados a la imagen
            }}
          />
        </Box>
        <Typography variant='body1'>{category}</Typography>
      </Card>
    </>
  );
};
export default CategoryCard;
