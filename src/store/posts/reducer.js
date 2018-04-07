import { POST_ACTIONS } from './constants';

const posts = (state = [], { type, curry }) =>
  POST_ACTIONS.has(type) ? curry(state) : state;

export default posts;
