import ButtonWithMenu from '@/components/common/ButtonWithMenu';
import NoticeCard from '@/components/common/NoticeCard';
import { ArrowRightIcon } from '@/components/icons';
import { ADMIN_ROUTES } from '@/constants/routes';
import { useBoolean } from '@/hooks/useBoolean';
import { Box, ButtonBase, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ocultar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('error');
    }, 500);
  });
}

export default function Card({ id, title, category }) {
  const { value: IsSuccess, setTrue: setSuccess, setFalse: setFail } = useBoolean();
  const { value: isToastVisible, setTrue: showToast, setFalse: hiddenToast } = useBoolean();

  async function handleHidden() {
    hiddenToast();

    try {
      await ocultar();
      setSuccess();
    } catch (error) {
      console.log(error.message);
      setFail();
    } finally {
      showToast();
    }
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box padding='1rem 1.75rem' bgcolor='lightGray.main' borderRadius='1rem'>
        <Box display='flex' justifyContent='space-between' mb='0.5rem'>
          <Typography variant='h3' color='primary.main' fontWeight={700}>
            {title}
          </Typography>
          <ButtonWithMenu
            onHidden={handleHidden}
            editRoute={ADMIN_ROUTES.MICROENTREPRENEURSHIPS.EDIT + '/' + id}
          />
        </Box>
        <Divider sx={{ width: '70%', bgcolor: 'secondary.main', height: '1px' }} />
        <Box display='flex' justifyContent='space-between' mt='1rem'>
          <Typography variant='body2' lineHeight='1.5rem' width='80%'>
            {category}
          </Typography>
          <Link to={String(id)}>
            <ButtonBase sx={{ width: '2rem', height: '2rem' }}>
              <ArrowRightIcon fill={'#090909'} />
            </ButtonBase>
          </Link>
        </Box>
      </Box>
      {isToastVisible && (
        <NoticeCard
          isOpen={isToastVisible}
          handleClose={hiddenToast}
          success={IsSuccess}
          mainMessage={'Publicación ocultada con éxito'}
          cancelFunction={handleHidden}
        />
      )}
    </Grid>
  );
}
