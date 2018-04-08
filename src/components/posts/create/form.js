import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import { Form } from '../../../utils';

const { operations: { startString, endString } } = Timer;

const { ClearForm, resetSuccess, TextField } = Form;

const PostBase = ({ handleSubmit }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Field
              name="title"
              component={TextField}
              placeholder="title"
              label="title"
            />
          </Grid>

          <Grid item xs={6}>
            <Field
              name="message"
              component={TextField}
              placeholder="message"
              label="message"
            />
          </Grid>
          <Grid item xs={11}>
            <Text align="center">
              <Button type="submit">Create Post </Button>
            </Text>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

export default ClearForm(PostBase);
