import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Posts } from '../../../store';

const CreatForm = ({ createPost, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <ReduxPost
        form={`createPost`}
        editing={false}
        initialValues={props.post}
        onSubmit={createPost}
      />
    </Grid>
  </Grid>
);

const mapState = ({ posts }) => ({ post: { id: posts.length } });

export default connect(mapState, Posts.actions)(CreatForm);
