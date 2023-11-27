import Grid from '@material-ui/core/Grid';

const MyGridComponent = ({ children }) => (
  <div style={{ backgroundColor: '#093C59', padding: 2 }}>
    <Grid container spacing={3}>
      {children}
    </Grid>
  </div>
);

export default MyGridComponent;