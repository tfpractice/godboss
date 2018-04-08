import {
  addComment,
  dropComment,
  hasComment,
  idSet,
  update,
  updateById,
} from './operations';
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS,
  SET_COMMENTS,
  UPDATE_COMMENT,
} from './constants';

const set = arr => state => arr;

export const setComments = comments => ({
  type: SET_COMMENTS,
  curry: set(comments),
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  curry: addComment(comment),
});

export const updateComment = comment => ({
  type: CREATE_COMMENT,
  curry: updateById(comment),
});

export const deleteComment = comment => ({
  type: CREATE_COMMENT,
  curry: dropComment(comment),
});
