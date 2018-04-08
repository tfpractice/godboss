import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CreateForm, EditForm } from '../form';
import { Posts } from '../../../store';
import { sameID } from '../../../store/posts/operations';

const PostCard = props => {
  const { post } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Card>
          <CardHeader title={post.title} subheader={post.user} />
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={11}>
                <Text>{post.message}</Text>
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
              <Grid item xs={6}>
                <Link to={`/posts/${post.id}/edit`}>
                  <Button>Edit Post</Button>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={`/posts`}>
                  <Button onClick={() => props.deletePost(props.post)}>
                    Edit Post
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }, { post, ...own }) => ({});

const connected = connect(mapState, Posts.actions);

export default connected(PostCard);
