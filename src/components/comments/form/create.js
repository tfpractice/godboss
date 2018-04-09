import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxComment from './form';
import { Comments } from '../../../store';

const { operations: { samePostID } } = Comments;

const CreatForm = ({ createComment, comment, ...props }) => {
  const a = 0;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxComment
          form={`createComment`}
          editing={false}
          initialValues={comment}
          onSubmit={createComment}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ comments }, { post }) => {
  const postId = post.id;

  const id = comments.filter(samePostID({ postId })).length;

  return { comment: { id, postId } };
};

export default connect(mapState, Comments.actions)(CreatForm);
