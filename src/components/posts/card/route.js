import Grid from 'material-ui/Grid';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import EditForm from '../form/update';
import PostCard from './card';

const Main = ({ match, ...props }) => {
  console.log(`MAIN props`, props);
  console.log(`MAIN match`, match);
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={11}>
        <Route
          path={match.url}
          component={() => <PostCard post={props.post} />}
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

export default Main;
