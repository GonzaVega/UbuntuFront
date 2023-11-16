import { styled } from '@mui/material';

const StyledAvatar = styled('div')({
  backgroundColor: 'black',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  marginLeft: 'auto',
  cursor: 'pointer',
});

const AdminAvatar = () => {
  return <StyledAvatar>AD</StyledAvatar>;
};

export default AdminAvatar;
