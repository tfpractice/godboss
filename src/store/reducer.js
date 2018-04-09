import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as comments } from './comments';
import { reducer as posts } from './posts';

export default combineReducers({ form, posts, comments });
