import Grid from 'material-ui/Grid';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import Home from '../home';
import PostCard from './card';

const Main = ({ match, ...props }) => {
  console.log(`props`, props);
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={11}>
        <Route exact path="/" component={Home} />
        <Route path={`${match.url}/:id`} component={PostCard} />
        postroute
        {/* <Switch>
          <Route path="/create" component={Home} />
        <Route path="/posts" component={Home} />
      </Switch> */}
      </Grid>
    </Grid>
  );
};

export default Main;
