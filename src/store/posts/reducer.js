import { POST_ACTIONS } from './constants';
import * as postOps from './operations';

const { setId } = postOps;

const init = Array(15)
  .fill(postOps.post())
  .map((p, i) => postOps.setId(i)(p));

const posts = (state = init, { type, curry }) =>
  POST_ACTIONS.has(type) ? curry(state) : state;

export default posts;
