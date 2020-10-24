# @samsch/eslint-default

My personal eslint config.

Use by adding a `.eslintrc.js` file to your project root with this content:

```js
'use strict';

module.exports = {
  extends: '@samsch/eslint-default',
};
```

By default, it's in script (CommonJS) and node env mode. 

```js
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
```

You can change put it in ESM and browser mode by adding this in your .eslintrc.js file

```
  env: {
    node: false,
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
```
