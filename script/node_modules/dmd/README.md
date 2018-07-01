[![view on npm](http://img.shields.io/npm/v/dmd.svg)](https://www.npmjs.org/package/dmd)
[![npm module downloads](http://img.shields.io/npm/dt/dmd.svg)](https://www.npmjs.org/package/dmd)
[![Build Status](https://travis-ci.org/jsdoc2md/dmd.svg?branch=master)](https://travis-ci.org/jsdoc2md/dmd)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Join the chat at https://gitter.im/jsdoc2md/jsdoc2md](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsdoc2md/jsdoc2md?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# dmd
dmd (document with markdown) is the default output template for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It contains [handlebars](http://handlebarsjs.com) partials and helpers intended to transform [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) output into markdown API documentation.

For more documentation see the [jsdoc2md wiki](https://github.com/jsdoc2md/jsdoc-to-markdown/wiki).

## Synopsis

To give the most basic example, this input data:
```js
const templateData = [
  {
    id: "fatUse",
    name: "fatUse",
    kind: "member",
    description: "I am a global variable",
    scope: "global"
  }
]
```

run through this command:
```js
const dmd = require('dmd')
dmd(templateData)
```

produces this markdown output:
```
<a name="fatUse"></a>
## fatUse
I am a global variable

**Kind**: global variable
```

* * *

&copy; 2014-2018 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
