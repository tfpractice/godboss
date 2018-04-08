import {
  addPost,
  dropPost,
  hasPost,
  idSet,
  update,
  updateById,
} from './operations';
import {
  CREATE_POST,
  DELETE_POST,
  GET_POSTS,
  SET_POSTS,
  UPDATE_POST,
} from './constants';

const set = arr => state => arr;

export const setPosts = posts => ({
  type: SET_POSTS,
  curry: set(posts),
});

export const createPost = post => ({
  type: CREATE_POST,
  curry: addPost(post),
});

export const updatePost = post => ({
  type: CREATE_POST,
  curry: updateById(post),
});

export const deletePost = post => ({
  type: CREATE_POST,
  curry: dropPost(post),
});
