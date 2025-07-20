import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height="calc(100vh - 4rem)">
          <Grid item sx={{ width: '20rem', bgcolor: 'primary.main' }}>
            First
          </Grid>
          <Grid item sx={{ flexGrow: 1, bgcolor: 'primary.main' }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item sx={{ width: '10rem', bgcolor: 'primary.main' }}>
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
