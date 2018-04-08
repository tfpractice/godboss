import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import { PostCard } from '../posts';

const App = ({ posts, ...props }) => {
  console.log(`posts`, posts, props);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          {posts.map((p, i) => (
            <Grid key={i} item xs={6} sm={4}>
              <PostCard post={p} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }) => ({ posts });

const connected = connect(mapState);

export default connected(App);
