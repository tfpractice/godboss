import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Posts } from '../../../store';

const PostForm = ({ createPost, ...props }) => {
  const a = 0;

  console.log(`props`, props);

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxPost
          form={`createPost`}
          initialValues={{}}
          onSubmit={createPost}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ timer }) => ({});

export default connect(mapState, Posts.actions)(PostForm);
