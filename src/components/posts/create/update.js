import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Posts } from '../../../store';

const PostForm = ({ updatePost, timer, formID, ...props }) => {
  console.log(`formID`, formID);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxPost form={formID} initialValues={post} onSubmit={updatePost} />
      </Grid>
    </Grid>
  );
};

const mapState = ({ timer }) => ({});

export default connect(mapState, Posts.actions)(PostForm);
