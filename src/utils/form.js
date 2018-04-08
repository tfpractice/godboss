import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/TextField';
import { reduxForm } from 'redux-form';

export const resetSuccess = (res, dispatch, { reset }) => reset();

const onSubmitSuccess = resetSuccess;

const enableReinitialize = true;

export const ClearForm = form =>
  reduxForm({
    onSubmitSuccess,
    enableReinitialize,
  })(form);

// const {
//   input,
//   label,
//   type,
//   meta: { asyncValidating, touched, error },
//   ...rest
// } = props;

export const TextField = ({ input, meta, ...rest }) => (
  <TextField inputProps={input} {...meta} {...rest} />
);
