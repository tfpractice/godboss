import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Comments, Posts } from '../../../store';
import { sameID } from '../../../store/posts/operations';
import { samePostID } from '../../../store/comments/operations';

const CommentCard = props => {
  const { post, comment } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Card>
          <CardHeader title={comment.title} subheader={comment.user} />
          <CardContent>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={11}>
                <Text>{comment.message}</Text>
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
                <Link to={`/posts/${comment.postId}/edit`}>
                  <Button>Edit Post</Button>
                </Link>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts, comments }, { post, comment, ...own }) => ({});

const connected = connect(mapState, Comments.actions);

export default connected(CommentCard);
