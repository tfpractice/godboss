import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { Field } from 'redux-form';

import { Form } from '../../../utils';

const { ClearForm, TextField } = Form;

const PostBase = ({ handleSubmit }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          spacing={40}
        >
          <Grid item xs={11}>
            <Card>
              <CardHeader title="Post Form" />
              <CardHeader
                title={
                  <Grid
                    container
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={11} md={6}>
                      <Field
                        name="title"
                        component={TextField}
                        placeholder="title"
                        label="title"
                      />
                    </Grid>
                    <Grid item xs={11} md={6}>
                      <Field
                        name="user"
                        component={TextField}
                        placeholder="user"
                        label="user"
                      />
                    </Grid>
                  </Grid>
                }
              />
              <CardContent>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={11}>
                    <Text align="center">
                      <Field
                        name="message"
                        component={TextField}
                        placeholder="message"
                        label="message"
                        type="textarea"
                        fullWidth
                        multiline
                        rows={15}
                      />
                    </Text>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={11}>
                    <Text align="center">
                      <Button type="submit">Create Post </Button>
                    </Text>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

export default ClearForm(PostBase);
