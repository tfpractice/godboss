import Grid from 'material-ui/Grid';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import Home from '../home';
import Nav from '../nav';
import PostsRoute from '../posts';
import { CreateForm } from '../posts';

const mainStyles = theme => ({ main: { marginTop: `5rem` } });

const Styled = withStyles(mainStyles, { name: `Home` });

const Main = props => (
  <Grid container justify="center" alignContent="center">
    <Grid item xs={12}>
      <Route component={Nav} />
    </Grid>
    <Grid item xs={10} className={props.classes.main}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={PostsRoute} />
      </Switch>
    </Grid>
  </Grid>
);

export default Styled(Main);
