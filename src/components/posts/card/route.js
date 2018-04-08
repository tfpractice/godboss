import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import EditForm from '../form/update';
import PostCard from './card';
import { sameID } from '../../../store/posts/operations';

const PostCardRoute = ({ match, post, ...props }) => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={11}>
      <Route
        exact
        path={match.path}
        render={rProps => <PostCard post={post} {...rProps} />}
      />
      <Route
        exact
        path={`${match.path}/edit`}
        render={rProps => <EditForm post={post} {...rProps} />}
      />
    </Grid>
  </Grid>
);

const mapState = ({ posts }, { post, ...own }) => {
  const { match: { params } = {} } = own;

  return { post: post || posts.find(sameID(params)) };
};

const connected = connect(mapState);

export default connected(PostCardRoute);
