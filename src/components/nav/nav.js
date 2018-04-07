import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import withStyles from 'material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';

import links from './links';
import { withIndex } from '../wrappers';

const styles = theme => ({ bar: { backgroundColor: `#607d8bcc` } });

const Styled = withStyles(styles);

const defProps = { location: `/`, index: 0 };

const TabNav = ({ index, hPush, set, match, location, ...rest } = defProps) => (
  <AppBar className={rest.classes.bar}>
    <Toolbar>
      <Grid container justify="center" alignContent="center">
        <Tabs
          centered
          scrollable
          value={index}
          // scrollButtons="on"
          textColor="secondary"
          indicatorColor="#fff"
          onChange={set}
        >
          {links.map(l => (
            <Tab
              key={l.label}
              label={l.label}
              to={l.pathname}
              component={Link}
            />
          ))}
        </Tabs>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withRouter(withIndex(Styled(TabNav)));
