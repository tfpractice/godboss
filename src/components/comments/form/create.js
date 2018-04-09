import Grid from 'material-ui/Grid';
import React from 'react';
import { connect } from 'react-redux';

import ReduxPost from './form';
import { Comments } from '../../../store';

const CreatForm = ({ createComment, ...props }) => {
  const a = 0;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <ReduxPost
          form={`createComment`}
          initialValues={{}}
          onSubmit={createComment}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ posts }) => ({ comment: { id: posts.length } });

export default connect(mapState, Comments.actions)(CreatForm);
