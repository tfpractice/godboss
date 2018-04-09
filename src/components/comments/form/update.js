import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxComment from './form';
import { Comments } from '../../../store';
import { sameID } from '../../../store/posts/operations';

const EditForm = ({ updateComment, comment }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <ReduxComment
        form={`editComment`}
        initialValues={comment}
        editing
        comment={comment}
        onSubmit={updateComment}
      />
    </Grid>
  </Grid>
);

const mapState = ({ posts }, { post, comment }) => ({ comment });

export default connect(mapState, Comments.actions)(EditForm);
