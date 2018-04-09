import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import CommentList from './comment';
import PostCard from './card';
import { Comments, Posts } from '../../../store';
import { CreateForm, EditForm } from '../../comments';
import { sameID } from '../../../store/posts/operations';
import { samePostID } from '../../../store/comments/operations';

const PostDetail = ({ match, post, comments, ...props }) => (
  <Grid
    container
    justify="center"
    alignContent="center"
    spacing={40}
    alignItems="center"
  >
    <Grid item xs={11}>
      <PostCard post={post} match={match} />
    </Grid>

    <Grid item xs={11} sm={7}>
      <CommentList post={post} match={match} />
    </Grid>
    <Grid item xs={11} sm={4}>
      {props.editing ? (
        <EditForm post={post} comment={props.currentComment} match={match} />
      ) : (
        <CreateForm post={post} />
      )}
    </Grid>
  </Grid>
);

const mapState = ({ posts, comments }, { post, ...own }) => {
  const { match: { params } = {} } = own;

  return {
    post: post || posts.find(sameID(params)),
    editing: params.comment_id || false,
    currentComment: comments.find(sameID({ id: params.comment_id })),
    comments: comments.filter(samePostID({ postId: params.id })),
  };
};

const connected = connect(mapState, { ...Posts.actions, ...Comments.actions });

export default connected(PostDetail);
