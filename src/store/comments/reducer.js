import { COMMENT_ACTIONS } from './constants';
import * as commentOps from './operations';

const init = Array(45)
  .fill(commentOps.comment())
  .map((p, i) => commentOps.setId(`cmt${i % 15}_${(i % 15) % 3}`)(p))
  .map((p, i) => commentOps.setTitle(commentOps.id(p))(p))
  .map((p, i) => commentOps.setPostId(i % 15)(p));

const comments = (state = init, { type, curry }) =>
  COMMENT_ACTIONS.has(type) ? curry(state) : state;

export default comments;
