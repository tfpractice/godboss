import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Face from 'material-ui-icons/Comment';
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
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostCard from './card';
import { Comments, Posts } from '../../../store';
import { CreateForm } from '../../comments';
import { sameID } from '../../../store/posts/operations';
import { samePostID } from '../../../store/comments/operations';

const CommentList = ({ match, post, comments, ...props }) => {
  const style = { backgroundColor: `#88f` };

  const currID = match.params.comment_id || ``;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <List>
          {comments.map((c, i) => (
            <Paper key={i} style={currID == c.id ? style : {}}>
              <ListItem dense divider>
                <Grid
                  container
                  justify="space-around"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <ListItemIcon>
                      <Face />
                    </ListItemIcon>
                  </Grid>
                  <Grid item xs={8}>
                    <ListItemText
                      inset
                      primary={
                        <Text component="div" variant="title">{`${c.title} | ${
                          c.user
                        }`}</Text>
                      }
                      secondary={c.message}
                    />
                  </Grid>
                  <Grid item>
                    <Link to={`/posts/${post.id}/comments/${c.id}/edit`}>
                      <ListItemIcon>
                        <IconButton aria-label="Edit">
                          <EditIcon />
                        </IconButton>
                      </ListItemIcon>
                    </Link>
                  </Grid>
                  <Grid item>
                    <ListItemIcon>
                      <IconButton aria-label="Edit">
                        <DeleteIcon onClick={() => props.deleteComment(c)} />
                      </IconButton>
                    </ListItemIcon>
                  </Grid>
                </Grid>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts, comments }, { post, ...own }) => {
  const { match: { params } = {} } = own;

  const postId = (post && post.id) || params.id;

  const coms = comments.filter(samePostID({ postId }));

  return {
    post: post || posts.find(sameID({ id: postId })),
    comments: comments.filter(samePostID({ postId })),
  };
};

const connected = connect(mapState, { ...Posts.actions, ...Comments.actions });

export default connected(CommentList);
