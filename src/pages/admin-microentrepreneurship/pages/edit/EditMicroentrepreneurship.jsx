import NoticeCard from '@/components/common/NoticeCard';
import { useBoolean } from '@/hooks/useBoolean';
import useFetch from '@/hooks/useFetch';
import SkeletonView from '@/pages/admin-microentrepreneurship/pages/edit/components/SkeletonView';
import LoadForm from '@/pages/admin-microentrepreneurship/pages/load/components/LoadForm';
import { MicroEntrepreneurshipService } from '@/services/micro-entrepreneurship.service';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function EditMicroentrepreneurship() {
  const { value, setFalse, toggle } = useBoolean(false);
  const { id } = useParams();
  const microentrepreneurshipService = new MicroEntrepreneurshipService();

  const { data, loading } = useFetch({
    queryFn: ({ abortController }) => microentrepreneurshipService.findOne({ id, abortController }),
  });

  function handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      toggle((preValue) => !preValue);
      setSubmitting(false);
    }, 500);
  }

  return (
    <Container sx={{ py: '2.5rem' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1' align='center'>
            Carga de Microemprendimiento
          </Typography>
          <Box>
            <Typography
              variant='h2'
              sx={{ fontSize: '1.25rem', fontWeight: '400' }}
              align='center'
              mt={'2rem'}
            >
              Completá el formulario para cargar un Microemprendimiento
            </Typography>
            {loading ? (
              <SkeletonView />
            ) : (
              <LoadForm
                initialValues={{
                  ...data,
                  category: data.category.name,
                  state: data.province,
                  subcategory: data.subCategory,
                }}
                onSubmit={handleSubmit}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <NoticeCard
        isOpen={value}
        success={true}
        handleClose={setFalse}
        mainMessage={'Cambios guardados con éxito'}
      />
    </Container>
  );
}
