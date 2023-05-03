# Path Slashes

[![npm Package Version](https://img.shields.io/npm/v/path-slashes?)](https://www.npmjs.com/package/path-slashes)
[![Package Dependencies](https://img.shields.io/badge/deps-none-4cc552)](https://www.npmjs.com/package/path-slashes?activeTab=dependencies)
[![Coveralls github](https://img.shields.io/coveralls/github/simbo/path-slashes)](https://coveralls.io/github/simbo/path-slashes)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/simbo/path-slashes/ci.yml?branch=main)](https://github.com/simbo/path-slashes/actions/workflows/ci.yml)
[![GitHub Repo](https://img.shields.io/badge/repo-public-87ceeb)](https://github.com/simbo/path-slashes)
[![License MIT](https://img.shields.io/badge/license-MIT-4cc552)](http://simbo.mit-license.org/)

A javascript library to add or remove trailing and/or leading slashes in path
strings, test for their existence or join path strings with slashes without
duplicating them.

---

## Install

This package is published to the npm registry as
[`path-slahes`](https://www.npmjs.com/package/path-slashes).

You can install it:

```sh
# using npm:
npm install --save path-slashes

# using yarn:
yarn add path-slashes
```

ℹ️ **HINT**: This library is a pure ESM package. (You may want to
[read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).)

## Usage Examples

```js
import { hasLeadingSlash } from 'path-slashes';

// Check if given path has a leading slash
hasLeadingSlash('/foo'); // -> true
hasLeadingSlash('foo'); // -> false
```

```js
import { hasTrailingSlash } from 'path-slashes';

// Check if given path has a trailing slash
hasTrailingSlash('foo/'); // -> true
hasTrailingSlash('foo'); // -> false
```

```js
import { withLeadingSlash } from 'path-slashes';

// Ensure given path has a leading slash
withLeadingSlash('foo'); // -> '/foo'
```

```js
import { withTrailingSlash } from 'path-slashes';

// Ensure given path has a trailing slash
withTrailingSlash('foo'); // -> 'foo/'
```

```js
import { withoutLeadingSlash } from 'path-slashes';

// Ensure given path has no leading slash
withoutLeadingSlash('/foo/'); // -> 'foo/'
```

```js
import { withoutTrailingSlash } from 'path-slashes';

// Ensure given path has no trailing slash
withoutTrailingSlash('/foo/'); // -> '/foo'
```

```js
import { withSlashes } from 'path-slashes';

// Ensure given path has both leading and trailing slashes
withSlashes('foo'); // -> '/foo/'
```

```js
import { withoutSlashes } from 'path-slashes';

// Ensure given path has neither leading nor trailing slashes
withoutSlashes('/foo/'); // -> 'foo'
```

```js
import { slashJoin } from 'path-slashes';

// Join path parts and add slashes where necessary
slashJoin('foo', 'bar/', '/baz'); // -> 'foo/bar/baz'
```

## API

```ts
function hasLeadingSlash(path: string): boolean;
```

```ts
function hasTrailingSlash(path: string): boolean;
```

```ts
function withLeadingSlash(path: string): string;
```

```ts
function withTrailingSlash(path: string): string;
```

```ts
function withSlashes(path: string): string;
```

```ts
function withoutLeadingSlash(path: string): string;
```

```ts
function withoutTrailingSlash(path: string): string;
```

```ts
function withoutSlashes(path: string): string;
```

```ts
function slashJoin(...strings: (string | string[])[]): string;
```

## License and Author

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)
