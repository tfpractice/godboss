import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Posts } from '../../../store';
import { sameID } from '../../../store/posts/operations';

const PostForm = ({ updatePost, ...props }) => {
  const a = 0;

  console.log(`props`, props);

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxPost
          form={`editPost`}
          initialValues={props.post}
          onSubmit={updatePost}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts, post }, { match: { params } }) => {
  console.log(`params`, params);
  return { post: post || posts.find(sameID(params)) };
};

export default connect(mapState, Posts.actions)(PostForm);
