import { COMMENT_ACTIONS } from './constants';
import * as commOps from './operations';

const init = Array(45)
  .fill(commOps.comment())
  .map((p, i) => commOps.setPostId(i % 15)(p))
  .map((p, i) => commOps.setId(`${commOps.postId(p)}_${i}`)(p))
  .map((p, i) => commOps.setTitle(`comment_${commOps.id(p)}`)(p));

const comments = (state = init, { type, curry }) =>
  COMMENT_ACTIONS.has(type) ? curry(state) : state;

export default comments;
