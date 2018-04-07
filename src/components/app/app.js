import Grid from 'material-ui/Grid';
import React from 'react';

import Timer from '../timer';

const App = () => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center">
        <Grid item xs={11}>
          <Timer />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default App;
