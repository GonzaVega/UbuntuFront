import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBoolean } from '@/hooks/useBoolean';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import { Box, Container, ImageList, TextField, Typography } from '@mui/material';
import useFetch from '@/hooks/useFetch';
import ImageBackdrop from '@/pages/admin-microentrepreneurship/pages/detail/components/ImageBackdrop';
import ImageItem from '@/pages/admin-microentrepreneurship/pages/detail/components/ImageItem';
import SkeletonView from '@/pages/admin-microentrepreneurship/pages/detail/components/SkeletonView';

export default function MicroentrepreneurshipDetail() {
  const { id } = useParams();
  const [initialSlide, setInitialSlide] = useState(1);
  const { value: open, setTrue: handleOpen, setFalse: handleClose } = useBoolean();
  const microentrepreneurshipService = new MicroEntrepreneurshipService();
  const { data, loading, error } = useFetch({
    queryFn: ({ abortController }) => microentrepreneurshipService.findOne({ id, abortController }),
  });

  function initializeSlider(index) {
    setInitialSlide(index);
    handleOpen();
  }

  if (loading) return <SkeletonView />;

  if (error)
    return (
      <Container
        sx={{
          py: '2.5rem',
          minHeight: 'calc(100dvh - 56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography align='center' fontWeight={800} fontSize={'2rem'}>
            500 - Error interno
          </Typography>
        </Box>
      </Container>
    );

  return (
    <Container sx={{ py: '2.5rem' }}>
      <Typography variant='h1' align='center'>
        Microemprendimientos
      </Typography>
      <Box mt={'2.5rem'}>
        <Typography variant='h2' textAlign={'center'} color={'primary.main'}>
          {data.name}
        </Typography>
        <Typography variant='body1' textAlign={'center'} mt={'0.5rem'}>
          {data.category.name}
        </Typography>
        <Box display='flex' flexDirection='column' gap='1.5rem' my='1.5rem'>
          <TextField
            label={'Subcategoría'}
            value={data.subCategory}
            fullWidth
            InputLabelProps={{ sx: { color: 'primary.main' } }}
          />
          <TextField
            label={'País'}
            value={data.country}
            fullWidth
            InputLabelProps={{ sx: { color: 'primary.main' } }}
          />
          <TextField
            label={'Provincia/Estado'}
            value={data.province}
            fullWidth
            InputLabelProps={{ sx: { color: 'primary.main' } }}
          />
          <TextField
            label={'Ciudad'}
            value={data.city}
            fullWidth
            InputLabelProps={{ sx: { color: 'primary.main' } }}
          />
          <TextField
            label={'Descripción del Microemprendimiento'}
            value={data.description}
            fullWidth
            multiline
            InputLabelProps={{ sx: { color: 'primary.main' } }}
          />
          <TextField
            label={'Más información del Microemprendimiento'}
            value={data.moreInfo}
            fullWidth
            multiline
            InputLabelProps={{ sx: { color: 'primary.main' } }}
          />
        </Box>
        <Box>
          <ImageList cols={3} sx={{ height: '5rem' }} gap={8}>
            {data.images.map((image, index) => (
              <ImageItem key={image} src={image} handleOpen={() => initializeSlider(index)} />
            ))}
          </ImageList>
        </Box>
      </Box>
      <ImageBackdrop
        open={open}
        images={data.images}
        initialSlide={initialSlide}
        handleClose={handleClose}
      />
    </Container>
  );
}
