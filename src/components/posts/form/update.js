import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Posts } from '../../../store';
import { sameID } from '../../../store/posts/operations';

const EditForm = ({ updatePost, post }) => {
  const a = 0;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxPost
          form={`editPost`}
          initialValues={post}
          editing
          post={post}
          onSubmit={updatePost}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }, { post, ...own }) => {
  const { match: { params } } = own;

  return { post: post || posts.find(sameID(params)) };
};

export default connect(mapState, Posts.actions)(EditForm);
