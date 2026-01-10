export const hasVisited = Symbol('hasVisited');

export const base =
  process.env.NODE_ENV === 'production' ? '/resume-maker/' : '/';
