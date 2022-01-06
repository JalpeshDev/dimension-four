import { Dispatch, useRef } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { Formik } from 'formik';
import birdsActions from '../Redux/Birds/actions';
import { useDispatch } from 'react-redux';
import IBirds from '../Interface';

const InputTab = () => {
  const dispatch: Dispatch<any> = useDispatch()

  const addBirds = (values: IBirds, { resetForm }: any) => {
    dispatch(birdsActions.addBirds(values.birds));
    resetForm({ values: '' })
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        birds: 0
      }}
      onSubmit={addBirds}
    >
      {({
        handleSubmit,
        handleChange,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} style={{ marginTop: '20px' }} >
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom component="div">
                Birds on lake
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className="input-field">
                <TextField style={{ width: '70%' }}
                  inputProps={{ type: 'number' }}
                  label="Birds"
                  name="birds"
                  type="text"
                  value={values.birds}
                  onChange={handleChange} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="button" >
                <Button color="error" variant='contained' type="submit">send</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default InputTab;
