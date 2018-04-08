import Grid from 'material-ui/Grid';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardRoute from './card';
import Home from '../home';
import { CreateForm } from './form';

const PostsRoute = ({ match, ...props }) => {
  const a = 0;

  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={11}>
        <Route exact path={match.path} component={Home} />
        <Route path={`${match.path}/:id`} component={CardRoute} />
        <Route path={`${match.path}/create`} component={CreateForm} />
      </Grid>
    </Grid>
  );
};

export default PostsRoute;
