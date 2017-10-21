[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

# <%= name %>

_<%= description %>_

## Getting Started

To install:

    npm i --save <%= name %>

In your project:

``` javascript
 // => Example
```

## Publish

_Execute the command `npm run make:publish`. If UPDATE_GIT_BRANCHES is 'true' branches `develop` and `master` will be update in remote and local repo._

```bash

npm run make:publish <VERSION> <UPDATE_GIT_BRANCHES>

# Example: npm run make:publish 1.0.0 true
```

## License

MIT © [<%= author %>](<%= email %>)

[npm-image]: https://badge.fury.io/js/<%= name %>.svg
[npm-url]: https://npmjs.org/package/<%= name %>
[travis-image]: https://travis-ci.org/<%= projectOwner %>/<%= name %>.svg?branch=develop
[travis-url]: https://travis-ci.org/<%= projectOwner %>/<%= name %>
[daviddm-image]: https://david-dm.org/<%= projectOwner %>/<%= name %>.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/<%= projectOwner %>/<%= name %>
[coveralls-image]: https://coveralls.io/repos/<%= projectOwner %>/<%= name %>/badge.svg
[coveralls-url]: https://coveralls.io/r/<%= projectOwner %>/<%= name %>

