import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import { endsAfter, endsLater, startsBefore } from './validate';
import { Form } from '../../utils';
import { Timer } from '../../store';

const { operations: { startString, endString }} = Timer;

const { ClearForm, resetSuccess, TimeInput } = Form;

const TimeBase = ({ handleSubmit }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center">
          <Grid item xs={6}>
            <Field
              name="start"
              component={TimeInput}
              type="time"
              validate={startsBefore}
              step={5}
              placeholder="start time"
              label="start time"
            />
          </Grid>

          <Grid item xs={6}>
            <Field
              name="end"
              validate={[ endsAfter, endsLater ]}
              component={TimeInput}
              type="time"
              step={5}
              label="end time"
              placeholder="end time"
            />
          </Grid>
          <Grid item xs={11}>
            <Text align="center">
              <Button type="submit">Start Countdown</Button>
            </Text>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

const ReduxTime = ClearForm(TimeBase);

const TimeForm = ({ submitTimer, timer, formID, ...props }) => {
  const startAndReset = (res, dispatch, { reset }) =>
    props.startInterval() && resetSuccess(res, dispatch, { reset });

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxTime
          form={formID}
          initialValues={timer}
          onSubmit={submitTimer}
          onSubmitSuccess={startAndReset}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ timer }) => ({
  timer: {
    start: startString(timer),
    end: endString(timer),
  },
});

export default connect(mapState, Timer.actions)(TimeForm);
