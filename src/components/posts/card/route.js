import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import EditForm from '../form/update';
import PostCard from './card';
import { sameID } from '../../../store/posts/operations';

const PostCardRoute = ({ match, ...props }) => {
  console.log(`PostCardRoute props`, props);
  console.log(`PostCardRoute match`, match);
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={11}>
        <Route
          exact
          path={match.url}
          render={rProps => <PostCard post={props.post} {...rProps} />}
        />
        <Route
          path={`${match.url}/edit`}
          component={() => <EditForm post={props.post} />}
        />
        {/* <Switch>
          <Route path="/create" component={Home} />
        <Route path="/posts" component={Home} />
      </Switch> */}
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }, { post, ...own }) => {
  console.log(`own`, own);

  const { match: { params } = {} } = own;

  // console.log(`params`, params);
  return { post: post || posts.find(sameID(params)) };
};

const connected = connect(mapState);

export default connected(PostCardRoute);
