import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import EditForm from '../form/update';
import PostDetail from './detail';
import { EditForm as CommentEdit } from '../../comments';
import { sameID } from '../../../store/posts/operations';
import { samePostID } from '../../../store/comments/operations';

const PostCardRoute = ({ match, post }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={11}>
      <Route
        exact
        path={match.path}
        render={rProps => <PostDetail post={post} {...rProps} />}
      />
      <Route
        exact
        path={`${match.path}/edit`}
        render={rProps => <EditForm post={post} {...rProps} />}
      />

      <Route
        exact
        path={`${match.path}/comments/:comment_id/edit`}
        render={rProps => <PostDetail post={post} {...rProps} />}
      />
    </Grid>
  </Grid>
);

const mapState = ({ posts, comments }, { post, ...own }) => {
  const { match: { params } = {} } = own;

  return { post: post || posts.find(sameID(params)) };
};

const connected = connect(mapState);

export default connected(PostCardRoute);
