import Avatar from 'material-ui/Avatar';
import EditIcon from 'material-ui-icons/Edit';
import Face from 'material-ui-icons/Face';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import React from 'react';
import { connect } from 'react-redux';

import PostCard from './card';
import { sameID } from '../../../store/posts/operations';
import { samePostID } from '../../../store/comments/operations';

const PostDetail = ({ match, post, comments, ...props }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <PostCard post={post} match={match} />
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <List>
            {comments.map((c, i) => (
              <Paper key={i}>
                <ListItem>
                  <ListItemAvatar>
                    <Face />
                  </ListItemAvatar>
                  <ListItemText inset primary={c.message} secondary={c.user} />
                  <IconButton aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                  {` `}
                </ListItem>
              </Paper>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const mapState = ({ posts, comments }, { post, ...own }) => {
  const { match: { params } = {} } = own;

  return {
    post: post || posts.find(sameID(params)),
    comments: comments.filter(samePostID({ postId: params.id })),
  };
};

const connected = connect(mapState);

export default connected(PostDetail);
