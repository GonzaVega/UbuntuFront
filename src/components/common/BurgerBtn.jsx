import { IconButton, styled } from '@mui/material';

const StyledBurgerBtn = styled(IconButton)(({ $isActive }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  zIndex: 100000000,

  '& div': {
    width: '1.5rem',
    height: '2px',
    opacity: 1,
    background: $isActive ? 'black' : 'black',
    transition: 'all 0.3s ease',
  },

  '& div:first-child': {
    transform: $isActive ? 'rotate(-45deg) translate(-7px, 2px)' : 'none',
  },

  '& div:nth-child(2)': {
    opacity: $isActive ? '0' : '1',
  },

  '& div:nth-child(3)': {
    transform: $isActive ? 'rotate(45deg) translate(-7px, -2px)' : 'none',
  },
}));

export default function BurgerBtn({ isActive, handleShowMenu }) {
  return (
    <StyledBurgerBtn $isActive={isActive} onClick={handleShowMenu}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurgerBtn>
  );
}
