/**
 * Checks if given path has a leading slash
 */
export function hasLeadingSlash(path: string): boolean {
  path = `${path}`;
  return path.substr(0, 1) === '/';
}

/**
 * Checks if given path has a trailing slash
 */
export function hasTrailingSlash(path: string): boolean {
  path = `${path}`;
  return path.substr(-1) === '/';
}

/**
 * Ensures given path has a leading slash
 */
export function withLeadingSlash(path: string): string {
  path = `${path}`;
  return hasLeadingSlash(path) ? path : `/${path}`;
}

/**
 * Ensures given path has a trailing slash
 */
export function withTrailingSlash(path: string): string {
  path = `${path}`;
  return hasTrailingSlash(path) ? path : `${path}/`;
}

/**
 * Ensures given path has both leading and trailing slashes
 */
export function withSlashes(path: string): string {
  path = `${path}`;
  return withLeadingSlash(withTrailingSlash(path));
}

/**
 * Ensures given path has no leading slash
 */
export function withoutLeadingSlash(path: string): string {
  path = `${path}`;
  return hasLeadingSlash(path) ? path.substr(1) : path;
}

/**
 * Ensures given path has no trailing slash
 */
export function withoutTrailingSlash(path: string): string {
  path = `${path}`;
  return hasTrailingSlash(path) ? path.substr(0, path.length - 1) : path;
}

/**
 * Ensures given path has neither leading nor trailing slashes
 */
export function withoutSlashes(path: string): string {
  path = `${path}`;
  return withoutLeadingSlash(withoutTrailingSlash(path));
}

/**
 * Join path parts and add slashes where necessary
 */
export function slashJoin(...parts: (string | string[])[]): string {
  let path = '';
  for (const part of parts.flat()) {
    path = path === '' ? path : withTrailingSlash(path);
    path += withoutLeadingSlash(part);
  }
  return path;
}
