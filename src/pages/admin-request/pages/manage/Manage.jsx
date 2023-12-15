import NoticeCard from '@/components/common/NoticeCard';
import { useBoolean } from '@/hooks/useBoolean';
import ManageForm from '@/pages/admin-request/pages/manage/components/ManageForm';
import Managed from '@/pages/admin-request/pages/managed/Managed';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

export default function Manage() {
  const [manage, setManage] = useState('');
  const { palette } = useTheme();
  const { value, setFalse, toggle } = useBoolean(false);

  const handleChange = (event) => {
    setManage(event.target.value);

    setTimeout(() => {
      toggle(!value);
    }, 500);
  };

  return (
    <Grid>
      <Box
        display={'flex'}
        gap={'0.25rem'}
        mt={'1.5rem'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'0.5rem'}>
          <Box
            sx={{
              width: '1rem',
              height: '1rem',
              borderRadius: '50%',
              bgcolor: Managed ? 'success.main' : 'warning.main',
            }}
          ></Box>
          <Typography variant='h3'> No Gestionada</Typography>
        </Box>
        <Box mt='1rem' justifyContent={'flex-end'} display={'flex'} sx={{ width: '100%' }}>
          <FormControl variant='filled' sx={{ m: 1, width: '9.5rem' }}>
            <InputLabel id='demo-simple-select-filled-label'>Estado</InputLabel>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={manage}
              onChange={handleChange}
              MenuProps={{
                MenuListProps: { sx: { padding: 0 } },
              }}
            >
              <MenuItem value={'gestionada'}>
                <Box display={'flex'}>
                  <Box
                    sx={{
                      width: '1rem',
                      height: '1rem',
                      borderRadius: '50%',
                      bgcolor: Managed ? 'success.main' : 'warning.main',
                      mr: '0.5rem',
                    }}
                  ></Box>
                  <Typography variant='body1'>Gestionada</Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Typography
        fontWeight={800}
        mt={'1rem'}
        textAlign={'center'}
        color={palette.primary.main}
        variant='h2'
      >
        EcoSenda
      </Typography>
      <Typography mt={'1rem'} textAlign={'center'}>
        Fecha de solicitud: 20/08/2023
      </Typography>
      <ManageForm />
      <NoticeCard
        isOpen={value}
        success={true}
        handleClose={setFalse}
        mainMessage={'Estado modificado con éxito'}
      />
    </Grid>
  );
}
