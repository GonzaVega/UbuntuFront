import { Box, TextField } from '@mui/material';

export default function ManageForm() {
  return (
    <Box mb={'2.5rem'}>
      <TextField
        sx={{ mt: '1rem' }}
        id='outlined-basic'
        label='Apellido y Nombre'
        variant='outlined'
        fullWidth
        value={'Martinez, Juan'}
      />
      <TextField
        sx={{ mt: '1rem' }}
        id='outlined-basic'
        label='Correo electrónico'
        variant='outlined'
        fullWidth
        value={'martinezjuan@gmail.com'}
      />
      <TextField
        sx={{ mt: '1rem' }}
        id='outlined-basic'
        label='Telefono'
        variant='outlined'
        fullWidth
        value={'+ 54 9 261 589 645'}
      />
      <TextField
        sx={{ mt: '1rem' }}
        id='outlined-basic'
        label='Mensaje'
        rows={8}
        multiline
        variant='outlined'
        fullWidth
        value={`Hola, me gustaría recibir más \ninformación sobre cómo invertir en el \nMicroemprendimiento.\n\nAguardo su contacto.\n\nGracias`}
      />
    </Box>
  );
}
