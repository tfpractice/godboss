import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { Field } from 'redux-form';

import { Link } from 'react-router-dom';
import { Form } from '../../../utils';

const { ClearForm, TextField } = Form;

const PostBase = ({ handleSubmit, ...props }) => {
  const style = props.editing ? { backgroundColor: `#88f` } : {};

  const title = props.editing ? `Edit Post Form` : `New Post Form`;

  const url = props.editing ? `/posts/${props.post.id}` : `/posts`;

  return (
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
                <CardHeader title={title} style={style} />
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
                      <Text component="div" align="center">
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
                      <Text component="div" align="center">
                        <Link to={url}>
                          <Button type="submit">
                            {props.editing ? `Update` : `Submit`} Post
                          </Button>
                        </Link>
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
};

export default ClearForm(PostBase);
