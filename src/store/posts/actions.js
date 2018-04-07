import axios from 'axios';

import { addPost, hasPost, idSet, update, updateById } from './operations';
import {
  CREATE_POST,
  DELETE_POST,
  GET_POSTS,
  SET_POSTS,
  UPDATE_POST,
} from './constants';

const set = arr => state => arr;

const create = post => state => post;

const set = arr => state => arr;

const set = arr => state => arr;

export const setDogs = dogs => ({
  type: SET_POSTS,
  curry: set(dogs),
});

export const getDogs = () => dispatch =>
  axios
    .get(DOG_URL)
    .then(x => console.log(`x`, x) || setDogs(x.data.message))
    .then(dispatch);
