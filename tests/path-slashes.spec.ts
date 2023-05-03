import { describe, it } from '@jest/globals';

import {
  hasLeadingSlash,
  hasTrailingSlash,
  slashJoin,
  withLeadingSlash,
  withoutLeadingSlash,
  withoutSlashes,
  withoutTrailingSlash,
  withSlashes,
  withTrailingSlash
} from '../src/path-slashes.js';

describe('hasLeadingSlash', () => {
  it('should check if given path has a leading slash', () => {
    expect(hasLeadingSlash('foo')).toBeFalsy();
    expect(hasLeadingSlash('/foo')).toBeTruthy();
  });
});

describe('hasTrailingSlash', () => {
  it('should check if given path has a trailing slash', () => {
    expect(hasTrailingSlash('foo')).toBeFalsy();
    expect(hasTrailingSlash('foo/')).toBeTruthy();
  });
});

describe('withLeadingSlash', () => {
  it('should ensure given path has a leading slash', () => {
    expect(withLeadingSlash('foo')).toBe('/foo');
    expect(withLeadingSlash('/foo')).toBe('/foo');
  });
});

describe('withTrailingSlash', () => {
  it('should ensure given path has a trailing slash', () => {
    expect(withTrailingSlash('foo')).toBe('foo/');
    expect(withTrailingSlash('foo/')).toBe('foo/');
  });
});

describe('withSlashes', () => {
  it('should ensure given path has both leading and trailing slashes', () => {
    expect(withSlashes('foo')).toBe('/foo/');
    expect(withSlashes('/foo')).toBe('/foo/');
    expect(withSlashes('foo/')).toBe('/foo/');
    expect(withSlashes('/foo/')).toBe('/foo/');
  });
});

describe('withoutLeadingSlash', () => {
  it('should ensure given path has no leading slash', () => {
    expect(withoutLeadingSlash('foo')).toBe('foo');
    expect(withoutLeadingSlash('/foo')).toBe('foo');
  });
});

describe('withoutTrailingSlash', () => {
  it('should ensure given path has no trailing slash', () => {
    expect(withoutTrailingSlash('foo')).toBe('foo');
    expect(withoutTrailingSlash('foo/')).toBe('foo');
  });
});

describe('withoutSlashes', () => {
  it('should ensure given path has neither leading nor trailing slashes', () => {
    expect(withoutSlashes('foo')).toBe('foo');
    expect(withoutSlashes('/foo')).toBe('foo');
    expect(withoutSlashes('foo/')).toBe('foo');
    expect(withoutSlashes('/foo/')).toBe('foo');
  });
});

describe('slashJoin', () => {
  it('should join path parts and add slashes if necessary', () => {
    expect(slashJoin('foo/', '/bar', 'baz', '/boom')).toBe('foo/bar/baz/boom');
    expect(slashJoin('foo/')).toBe('foo/');
    expect(slashJoin('/foo/')).toBe('/foo/');
    expect(slashJoin('/foo')).toBe('/foo');
    expect(slashJoin('/foo/', '/bar', 'baz', '/boom')).toBe('/foo/bar/baz/boom');
    expect(slashJoin(['foo/', '/bar', 'baz', '/boom'])).toBe('foo/bar/baz/boom');
    expect(slashJoin(['foo/', '/bar', 'baz', '/boom/'])).toBe('foo/bar/baz/boom/');
    expect(slashJoin(['foo/', '/bar'], 'baz', '/boom')).toBe('foo/bar/baz/boom');
    expect(slashJoin(['/foo/', '/bar'], 'baz', '/boom/')).toBe('/foo/bar/baz/boom/');
  });
});
