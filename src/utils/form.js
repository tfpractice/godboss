import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { reduxForm } from 'redux-form';

export const resetSuccess = (res, dispatch, { reset }) => reset();

const onSubmitSuccess = resetSuccess;

const enableReinitialize = true;

export const ClearForm = form =>
  reduxForm({
    onSubmitSuccess,
    enableReinitialize,
  })(form);

export const renderText = ({ input, meta: { error: e }, ...rest }) => (
  <TextField inputProps={input} error={e} {...rest} />
);

export const TimeInput = props => {
  const {
    input,
    label,
    type,
    meta: { asyncValidating, touched, error },
    ...rest
  } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Text align="center">{label || input.namel}</Text>
      </Grid>

      <Grid item xs={11} className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} type={type} placeholder={label} {...rest} />
      </Grid>
      <Grid item xs={11}>
        {touched && error && <Text align="center">{error}</Text>}
      </Grid>
    </Grid>
  );
};
