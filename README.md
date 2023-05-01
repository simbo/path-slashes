# path-slashes

[![npm Package Version](https://img.shields.io/npm/v/path-slashes?)](https://www.npmjs.com/package/path-slashes)
[![Package Dependencies](https://img.shields.io/badge/deps-none-4cc552)](https://www.npmjs.com/package/path-slashes?activeTab=dependencies)
[![Coveralls github](https://img.shields.io/coveralls/github/simbo/path-slashes)](https://coveralls.io/github/simbo/path-slashes)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/simbo/path-slashes/CI/master)](https://github.com/simbo/path-slashes/actions?query=workflow%3ACI)
[![GitHub Repo](https://img.shields.io/badge/repo-public-87ceeb)](https://github.com/simbo/path-slashes)
[![License MIT](https://img.shields.io/badge/license-MIT-4cc552)](http://simbo.mit-license.org/)

> Adding or removing of trailing and/or leading slashes in strings, test for
> their existence or join strings with slashes without duplicating them. Native
> Typescript support included.

---

## Install

```sh
# using npm
npm install --save path-slashes

# using yarn
yarn add path-slashes
```

Or import it from a CDN:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/path-slashes/dist/path-slashes.modern.js"
></script>
```

```html
<script
  type="module"
  src="https://unpkg.com/browse/path-slashes/dist/path-slashes.modern.js"
></script>
```

## Quick Start

```js
// Check if given path has a leading slash
hasLeadingSlash('/foo'); // => true
hasLeadingSlash('foo'); // => false

// Check if given path has a trailing slash
hasTrailingSlash('foo/'); // => true
hasTrailingSlash('foo'); // => false

// Ensure given path has a leading slash
withLeadingSlash('foo'); // => '/foo'

// Ensure given path has a trailing slash
withTrailingSlash('foo'); // => 'foo/'

// Ensure given path has no leading slash
withoutLeadingSlash('/foo/'); // => 'foo/'

// Ensure given path has no trailing slash
withoutTrailingSlash('/foo/'); // => '/foo'

// Ensure given path has both leading and trailing slashes
withSlashes('foo'); // => '/foo/'

// Ensure given path has neither leading nor trailing slashes
withoutSlashes('/foo/'); // => 'foo'

// Join path parts and add slashes where necessary
slashJoin('foo', 'bar/', '/baz'); // => 'foo/bar/baz'
```

## License and Author

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)
