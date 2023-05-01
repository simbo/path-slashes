/**
 * Checks if given path has a leading slash
 */
export function hasLeadingSlash(path: string): boolean {
  path = `${path}`;
  return path.substring(0, 1) === '/';
}

/**
 * Checks if given path has a trailing slash
 */
export function hasTrailingSlash(path: string): boolean {
  path = `${path}`;
  return path.substring(path.length - 1) === '/';
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
  return hasLeadingSlash(path) ? path.substring(1) : path;
}

/**
 * Ensures given path has no trailing slash
 */
export function withoutTrailingSlash(path: string): string {
  path = `${path}`;
  return hasTrailingSlash(path) ? path.substring(0, path.length - 1) : path;
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
export function slashJoin(...strings: (string | string[])[]): string {
  const parts: string[] = strings.flat();
  return parts
    .map((part, i) => {
      if (i === 0) {
        return parts.length === 1 ? part : withoutTrailingSlash(part);
      } else if (i === parts.length - 1) {
        return withoutLeadingSlash(part);
      } else {
        return withoutSlashes(part);
      }
    })
    .join('/');
}
