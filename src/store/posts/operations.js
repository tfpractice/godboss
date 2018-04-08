const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco`;

export const post = (
  title = `title`,
  message = lorem,
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

export const setId = id => p => post(title(p), message(p), user(p), id);

export const setTitle = t => p => post(t, message(p), user(p), id(p));

export const setMsg = m => p => post(title(p), m, user(p), id(p));

export const sameID = p0 => p1 => id(p0) == id(p1);

export const diffID = p0 => p1 => !sameID(p0)(p1);

export const update = next => orig => ({ ...orig, ...next });

export const updateById = nxt => orig =>
  sameID(nxt)(orig) ? update(nxt)(orig) : orig;

export const idSet = (posts = []) => new Set(posts.map(id));

export const hasPost = (nxt = post()) => posts => idSet(posts).has(id(nxt));

export const xHasPost = (nxt = post()) => posts => !hasPost(nxt)(posts);

export const appendPost = nxt => posts => posts.concat(nxt);

export const addPost = nxt => posts =>
  hasPost(nxt)(posts) ? posts : appendPost(nxt)(posts);

export const dropPost = nxt => posts => posts.filter(diffID(nxt));
