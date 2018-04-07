import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import Counter from '../counter';
import TimeForm from './form';
import { Clock, Timer as TStore } from '../../store';
import { withInterval } from '../wrappers';

const Timer = props => {
  const {
    resetTimer,
    resetInterval,
    toggleClock,
    beginCount,
    toggleInterval,
    stopInterval,
    startClock,
  } = props;

  const toggle = () => {
    toggleClock();
    toggleInterval(beginCount, 1000);
  };

  const stop = () => {
    stopInterval();
    resetTimer();
  };

  const start = () => {
    startClock();
    resetInterval(beginCount, 1000);
  };

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Card>
          <CardHeader
            title={
              <Text variant="display1" align="center" gutterBottom>
                Going Merry Timer Test
              </Text>
            }
            subheader={
              <Text variant="headline" align="center">
                by tfpracice
              </Text>
            }
          />
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center">
              <Grid item xs={11}>
                <Counter />
              </Grid>
              <Grid item xs={11}>
                <TimeForm formID="timeForm" startInterval={start} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center">
              <Grid item xs={4}>
                <Button onClick={toggle}>Toggle Countdown</Button>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={stop}>Clear Timer</Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapState = ({ clock, timer }, own) => ({
  clock,
  remaining: clock.remaining,
  on: clock.active,
});

const connected = connect(mapState, { ...TStore.actions, ...Clock.actions });

export default connected(withInterval(Timer));
