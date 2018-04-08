import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Posts } from '../../../store';

const PostForm = ({ createPost, timer, formID, ...props }) => {
  console.log(`formID`, formID, props);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxPost form={formID} initialValues={{}} onSubmit={createPost} />
      </Grid>
    </Grid>
  );
};

const mapState = ({ timer }) => ({});

export default connect(mapState, Posts.actions)(PostForm);
