import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { sameID } from '../../../store/posts/operations';

const PostCard = props => {
  console.log(`PostCardprops`, props);
  const { post } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Card>
          <CardHeader
            title={post.title}
            subheader={
              <Text variant="headline" align="center">
                {post.user}
              </Text>
            }
          />
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={11}>
                {post.content}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              {/* <Grid item xs={4}>
                <Button onClick={toggle}>Toggle Countdown</Button>
                </Grid>
                <Grid item xs={4}>
                <Button onClick={stop}>Clear Timer</Button>
              </Grid> */}
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts, post }, { match: { params } }) => ({
  post: post || posts.find(sameID(params)),
});

const connected = connect(mapState);

export default connected(PostCard);
