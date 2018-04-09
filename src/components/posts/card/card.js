import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Comments, Posts } from '../../../store';

const { operations: { sameID } } = Posts;

const { operations: { samePostID } } = Comments;

const PostCard = props => {
  const { post } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Card>
          <CardHeader
            title={<Link to={`/posts/${post.id}`}>{post.title}</Link>}
            subheader={post.user}
          />
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
              <Grid item xs={4}>
                <Link to={`/posts/${post.id}`}>
                  <Button>View Post</Button>
                </Link>
              </Grid>
              {` `}
              <Grid item xs={4}>
                <Link to={`/posts/${post.id}/edit`}>
                  <Button>Edit Post</Button>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={`/posts`}>
                  <Button onClick={() => props.deletePost(props.post)}>
                    Delete Post
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

const mapState = ({ posts, comments }, { post, ...own }) => ({comments: comments.filter(samePostID({ postId: post.id })),});

const connected = connect(mapState, Posts.actions);

export default connected(PostCard);
