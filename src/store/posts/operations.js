export const post = (
  title = `title`,
  message = `message`,
  user = `user`,
  id = `id`,
) => ({
  title,
  message,
  user,
  id,
});

export const title = ({ title } = post()) => title;

export const message = ({ message } = post()) => message;

export const user = ({ user } = post()) => user;

export const id = ({ id } = post()) => id;

export const setId = id => post =>
  post(id, title(post), message(post), user(post));

export const setTitle = t => post =>
  post(id(post), t, message(post), user(post));

export const setMsg = m => post => post(id(post), title(post), m, user(post));

export const sameID = p0 => p1 => id(p0) === id(p1);

export const diffID = p0 => p1 => !sameID(p0)(p1);

export const update = next => orig => ({ ...orig, ...next });

export const updateById = nxt => orig =>
  sameID(nxt)(orig) ? update(nxt)(orig) : orig;

export const idSet = (posts = []) => new Set(posts.map(id));

export const hasPost = (nxt = post()) => posts => idSet(posts).has(id(nxt));

export const xHasPost = (nxt = post()) => posts => !hasPost(nxt)(posts);

export const appendPost = nxt => posts => post.concat(nxt);

export const addPost = nxt => posts =>
  hasPost(nxt)(posts) ? posts : posts.concat(nxt);

export const dropPost = nxt => posts => posts.filter(diffID(nxt));
