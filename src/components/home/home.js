import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostCard } from '../posts';

const Home = ({ posts, ...props }) => {
  console.log(`posts`, posts, props);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Text align="center" variant="headline">
          The FairyGodBoss Message Board
        </Text>
      </Grid>
      <Grid item xs={11}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          {posts.map(p => (
            <Grid key={p.id} item xs={11} sm={11} md={6}>
              <Link to={`/posts/${p.id}`}>
                <PostCard post={p} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }) => ({ posts });

const connected = connect(mapState);

export default connected(Home);
