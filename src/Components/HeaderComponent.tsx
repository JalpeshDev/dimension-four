import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const HeaderComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" gutterBottom component="div">
          D4 BirdWatcher
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent
