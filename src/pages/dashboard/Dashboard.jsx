import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import MyGridComponent from '@/pages/dashboard/MyGridComponent';

function Dashboard() {
  return (
    <Container py={'5rem'}>
      <MyGridComponent />
      <MyGridComponent />
      <MyGridComponent />
      <MyGridComponent />
      <MyGridComponent />
    </Container>
  );
}

export default Dashboard;
