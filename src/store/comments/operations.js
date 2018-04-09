const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim`;

export const comment = (
  postId = `0`,
  title = `comment_post${postId}`,
  message = lorem,
  user = `user`,
  id = `id`,
) => ({
  postId,
  title,
  message,
  user,
  id,
});

export const title = ({ title } = comment()) => title;

export const postId = ({ postId } = comment()) => postId;

export const message = ({ message } = comment()) => message;

export const user = ({ user } = comment()) => user;

export const id = ({ id } = comment()) => id;

export const setId = i => p =>
  comment(postId(p), title(p), message(p), user(p), i);

export const setPostId = i => p =>
  comment(i, title(p), message(p), user(p), id(p));

export const setTitle = t => p =>
  comment(postId(p), t, message(p), user(p), id(p));

export const setMsg = m => p => comment(postId(p), title(p), m, user(p), id(p));

export const sameID = p0 => p1 => id(p0) == id(p1);

export const samePostID = p0 => p1 => postId(p0) == postId(p1);

export const diffID = p0 => p1 => !sameID(p0)(p1);

export const diffPostID = p0 => p1 => !samePostID(p0)(p1);

export const update = next => orig => ({ ...orig, ...next });

export const updateById = nxt => orig =>
  sameID(nxt)(orig) ? update(nxt)(orig) : orig;

export const idSet = (comments = []) => new Set(comments.map(id));

export const hasComment = (nxt = comment()) => comments =>
  idSet(comments).has(id(nxt));

export const xHasComment = (nxt = comment()) => comments =>
  !hasComment(nxt)(comments);

export const appendComment = nxt => comments => comments.concat(nxt);

export const addComment = nxt => comments =>
  hasComment(nxt)(comments) ? comments : appendComment(nxt)(comments);

export const editComment = nxt => comments =>
  hasComment(nxt)(comments)
    ? comments.map(updateById(nxt))
    : appendComment(nxt)(comments);

export const dropComment = nxt => comments => comments.filter(diffID(nxt));
