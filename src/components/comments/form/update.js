import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxComment from './form';
import { Comments } from '../../../store';
import { sameID } from '../../../store/posts/operations';

const EditForm = ({ updateComment, post, ...props }) => {
  const a = 0;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxComment
          form={`editPost`}
          initialValues={{}}
          onSubmit={updateComment}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }, { post, ...own }) => {
  const { match: { params } } = own;

  return { post: post || posts.find(sameID(params)) };
};

export default connect(mapState, Comments.actions)(EditForm);
