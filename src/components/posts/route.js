import Grid from 'material-ui/Grid';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardRoute from './card';
import Home from '../home';
import { CreateForm } from './form';

const PostsRoute = ({ match, ...props }) => {
  const a = 0;

  console.log(` PostRouteprops`, props);
  console.log(` PostRoutematch`, match);
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={11}>
        <Route exact path={match.url} component={Home} />
        <Route exact path={`${match.url}/:id`} component={CardRoute} />
        <Route exact path={`${match.url}/create`} component={CreateForm} />
      </Grid>
    </Grid>
  );
};

export default PostsRoute;
