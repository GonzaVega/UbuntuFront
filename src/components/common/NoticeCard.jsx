import { useState } from 'react';
import { Typography, Card, Modal, Box, Button, Fade } from '@mui/material';
import { CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

const NoticeCard = ({ success, mainMessage, secondaryMessage, cancelFunction }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <Card
          sx={{
            width: '360px',
            borderRadius: '25px',
            textAlign: 'center',
            padding: '10px',
            paddingBottom: '1px',
          }}
        >
          {success ? (
            <Box sx={{ color: '#1D9129', fontSize: '45px' }}>
              <CheckCircleOutline fontSize='inherit' />
            </Box>
          ) : (
            <Box sx={{ color: '#BC1111', fontSize: '45px' }}>
              <CancelOutlined fontSize='inherit' />
            </Box>
          )}
          <Box sx={{ padding: '10px' }}>
            <Typography variant='h6'>{mainMessage}</Typography>
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant='body1' textAlign='left'>
              {secondaryMessage}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            {!success ? (
              <>
                <Button sx={{ textTransform: 'none' }} onClick={handleClose}>
                  Cancelar
                </Button>
                <Button sx={{ textTransform: 'none' }} onClick={cancelFunction}>
                  Intentar nuevamente
                </Button>
              </>
            ) : (
              <Button sx={{ textTransform: 'none' }} onClick={handleClose}>
                Aceptar
              </Button>
            )}
          </Box>
        </Card>
      </Fade>
    </Modal>
  );
};
export default NoticeCard;
