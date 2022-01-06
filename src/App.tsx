import HeaderComponent from './Components/HeaderComponent';
import AppTabs from './Components/AppTabs';
import { Grid } from '@mui/material'

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <HeaderComponent />
      </Grid>
      <Grid item xs={12}>
        <AppTabs />
      </Grid>
    </Grid>
  );
}

export default App;
