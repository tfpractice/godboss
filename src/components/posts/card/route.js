import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import CommentCard from './comment';
import EditForm from '../form/update';
import PostCard from './card';
import PostDetail from './detail';
import { sameID } from '../../../store/posts/operations';
import { samePostID } from '../../../store/comments/operations';

const PostCardRoute = ({ match, post, comments, ...props }) => (
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
    </Grid>
  </Grid>
);

const mapState = ({ posts, comments }, { post, ...own }) => {
  const { match: { params } = {} } = own;

  return {
    post: post || posts.find(sameID(params)),
    comments: comments.filter(samePostID({ postId: params.id })),
  };
};

const connected = connect(mapState);

export default connected(PostCardRoute);
