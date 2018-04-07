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

export const sameID = p0 => p1 => id(p0) === id(p1);

export const update = next => orig => ({ ...orig, ...next });

export const updateById = nxt => orig =>
  sameID(nxt)(orig) ? update(nxt)(orig) : orig;

export const idSet = posts => new Set(posts.map(id));

export const hasPost = (nxt = post()) => posts => idSet(posts).had(id(nxt));

export const addPost = nxt => posts =>
  hasPost(nxt)(posts) ? posts : posts.concat(nxt);
