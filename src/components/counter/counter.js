import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { Clock } from '../../store';
import { withInterval } from '../wrappers';

const Counter = ({ remaining, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Text align="center" variant="display4">
        {remaining}
      </Text>
      <Text align="center" variant="display3" gutterBottom>
        seconds remaining
      </Text>
    </Grid>
  </Grid>
);

const mapState = ({ clock: { remaining }}) => ({ remaining });

const connected = connect(mapState, Clock.actions);

export default connected(withInterval(Counter));
