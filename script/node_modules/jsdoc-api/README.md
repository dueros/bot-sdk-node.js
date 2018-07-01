[![view on npm](http://img.shields.io/npm/v/jsdoc-api.svg)](https://www.npmjs.org/package/jsdoc-api)
[![npm module downloads](http://img.shields.io/npm/dt/jsdoc-api.svg)](https://www.npmjs.org/package/jsdoc-api)
[![Build Status](https://travis-ci.org/jsdoc2md/jsdoc-api.svg?branch=master)](https://travis-ci.org/jsdoc2md/jsdoc-api)
[![Coverage Status](https://coveralls.io/repos/jsdoc2md/jsdoc-api/badge.svg?branch=master&service=github)](https://coveralls.io/github/jsdoc2md/jsdoc-api?branch=master)
[![Dependency Status](https://david-dm.org/jsdoc2md/jsdoc-api.svg)](https://david-dm.org/jsdoc2md/jsdoc-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Join the chat at https://gitter.im/jsdoc2md/jsdoc2md](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsdoc2md/jsdoc2md?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# jsdoc-api

A programmatic interface for [jsdoc3](https://github.com/jsdoc3/jsdoc) with a few features:

- Sync and async (Promise) interfaces on the two main jsdoc operations ('explain' and 'render documentation').
- Input (source code) can supplied as a string or set of file names/globs.
- Optional caching, dramatically speeding up future invocations with the same input.

## Synopsis

```js
> const jsdoc = require('jsdoc-api')

> jsdoc.explainSync({ source: '/** example doclet */ \n var example = true' })
[ { comment: '/** example doclet *∕',
   meta:
    { range: [ 28, 42 ],
      filename: 'nkrf18zlymohia4i29a0zkyt84obt9.js',
      lineno: 2,
      path: '/var/folders/74/tqh7thm11tq72d7sjty9qvdh0000gn/T',
      code:
       { id: 'astnode100000002',
         name: 'example',
         type: 'Literal',
         value: true } },
   description: 'example doclet',
   name: 'example',
   longname: 'example',
   kind: 'member',
   scope: 'global' },
 { kind: 'package',
   longname: 'package:undefined',
   files: [ '/var/folders/74/tqh7thm11tq72d7sjty9qvdh0000gn/T/nkrf18zlymohia4i29a0zkyt84obt9.js' ] } ]
```

# API Reference


* [jsdoc-api](#module_jsdoc-api)
    * _static_
        * [.cache](#module_jsdoc-api.cache) : [<code>cache-point</code>](https://github.com/75lb/cache-point)
        * [.explainSync([options])](#module_jsdoc-api.explainSync) ⇒ <code>Array.&lt;object&gt;</code>
        * [.explain([options])](#module_jsdoc-api.explain) ⇒ <code>Promise</code>
        * [.renderSync([options])](#module_jsdoc-api.renderSync)
    * _inner_
        * [~JsdocOptions](#module_jsdoc-api..JsdocOptions)
            * [.files](#module_jsdoc-api..JsdocOptions.JsdocOptions+files) : <code>string</code> \| <code>Array.&lt;string&gt;</code>
            * [.source](#module_jsdoc-api..JsdocOptions.JsdocOptions+source) : <code>string</code>
            * [.cache](#module_jsdoc-api..JsdocOptions.JsdocOptions+cache) : <code>boolean</code>
            * [.access](#module_jsdoc-api..JsdocOptions.JsdocOptions+access) : <code>string</code>
            * [.configure](#module_jsdoc-api..JsdocOptions.JsdocOptions+configure) : <code>string</code>
            * [.destination](#module_jsdoc-api..JsdocOptions.JsdocOptions+destination) : <code>string</code>
            * [.encoding](#module_jsdoc-api..JsdocOptions.JsdocOptions+encoding) : <code>string</code>
            * [.private](#module_jsdoc-api..JsdocOptions.JsdocOptions+private) : <code>boolean</code>
            * [.package](#module_jsdoc-api..JsdocOptions.JsdocOptions+package) : <code>string</code>
            * [.pedantic](#module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic) : <code>boolean</code>
            * [.query](#module_jsdoc-api..JsdocOptions.JsdocOptions+query) : <code>string</code>
            * [.recurse](#module_jsdoc-api..JsdocOptions.JsdocOptions+recurse) : <code>boolean</code>
            * [.readme](#module_jsdoc-api..JsdocOptions.JsdocOptions+readme) : <code>string</code>
            * [.template](#module_jsdoc-api..JsdocOptions.JsdocOptions+template) : <code>string</code>
            * [.tutorials](#module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials) : <code>string</code>

<a name="module_jsdoc-api.cache"></a>

### jsdoc.cache : [<code>cache-point</code>](https://github.com/75lb/cache-point)
The [cache-point](https://github.com/75lb/cache-point) instance used when `cache: true` is specified on `.explain()` or `.explainSync()`.

**Kind**: static property of [<code>jsdoc-api</code>](#module_jsdoc-api)  
<a name="module_jsdoc-api.explainSync"></a>

### jsdoc.explainSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Returns jsdoc explain output.

**Kind**: static method of [<code>jsdoc-api</code>](#module_jsdoc-api)  
**Prerequisite**: Requires node v0.12 or above  

| Param | Type |
| --- | --- |
| [options] | [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions) | 

<a name="module_jsdoc-api.explain"></a>

### jsdoc.explain([options]) ⇒ <code>Promise</code>
Returns a promise for the jsdoc explain output.

**Kind**: static method of [<code>jsdoc-api</code>](#module_jsdoc-api)  
**Fulfil**: <code>object[]</code> - jsdoc explain output  

| Param | Type |
| --- | --- |
| [options] | [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions) | 

<a name="module_jsdoc-api.renderSync"></a>

### jsdoc.renderSync([options])
Render jsdoc documentation.

**Kind**: static method of [<code>jsdoc-api</code>](#module_jsdoc-api)  
**Prerequisite**: Requires node v0.12 or above  

| Param | Type |
| --- | --- |
| [options] | [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions) | 

**Example**  
```js
jsdoc.renderSync({ files: 'lib/*', destination: 'api-docs' })
```
<a name="module_jsdoc-api..JsdocOptions"></a>

### jsdoc-api~JsdocOptions
The jsdoc options, common for all operations.

**Kind**: inner class of [<code>jsdoc-api</code>](#module_jsdoc-api)  

* [~JsdocOptions](#module_jsdoc-api..JsdocOptions)
    * [.files](#module_jsdoc-api..JsdocOptions.JsdocOptions+files) : <code>string</code> \| <code>Array.&lt;string&gt;</code>
    * [.source](#module_jsdoc-api..JsdocOptions.JsdocOptions+source) : <code>string</code>
    * [.cache](#module_jsdoc-api..JsdocOptions.JsdocOptions+cache) : <code>boolean</code>
    * [.access](#module_jsdoc-api..JsdocOptions.JsdocOptions+access) : <code>string</code>
    * [.configure](#module_jsdoc-api..JsdocOptions.JsdocOptions+configure) : <code>string</code>
    * [.destination](#module_jsdoc-api..JsdocOptions.JsdocOptions+destination) : <code>string</code>
    * [.encoding](#module_jsdoc-api..JsdocOptions.JsdocOptions+encoding) : <code>string</code>
    * [.private](#module_jsdoc-api..JsdocOptions.JsdocOptions+private) : <code>boolean</code>
    * [.package](#module_jsdoc-api..JsdocOptions.JsdocOptions+package) : <code>string</code>
    * [.pedantic](#module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic) : <code>boolean</code>
    * [.query](#module_jsdoc-api..JsdocOptions.JsdocOptions+query) : <code>string</code>
    * [.recurse](#module_jsdoc-api..JsdocOptions.JsdocOptions+recurse) : <code>boolean</code>
    * [.readme](#module_jsdoc-api..JsdocOptions.JsdocOptions+readme) : <code>string</code>
    * [.template](#module_jsdoc-api..JsdocOptions.JsdocOptions+template) : <code>string</code>
    * [.tutorials](#module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials) : <code>string</code>

<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+files"></a>

#### options.files : <code>string</code> \| <code>Array.&lt;string&gt;</code>
One or more filenames to process. Either this or `source` must be supplied.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+source"></a>

#### options.source : <code>string</code>
A string containing source code to process. Either this or `source` must be supplied.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+cache"></a>

#### options.cache : <code>boolean</code>
Set to `true` to cache the output - future invocations with the same input will return immediately.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+access"></a>

#### options.access : <code>string</code>
Only display symbols with the given access: "public", "protected", "private" or "undefined", or "all" for all access levels. Default: all except "private".

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+configure"></a>

#### options.configure : <code>string</code>
The path to the configuration file. Default: path/to/jsdoc/conf.json.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+destination"></a>

#### options.destination : <code>string</code>
The path to the output folder. Use "console" to dump data to the console. Default: ./out/.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+encoding"></a>

#### options.encoding : <code>string</code>
Assume this encoding when reading all source files. Default: utf8.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+private"></a>

#### options.private : <code>boolean</code>
Display symbols marked with the @private tag. Equivalent to "--access all". Default: false.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+package"></a>

#### options.package : <code>string</code>
The path to the project's package file. Default: path/to/sourcefiles/package.json

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic"></a>

#### options.pedantic : <code>boolean</code>
Treat errors as fatal errors, and treat warnings as errors. Default: false.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+query"></a>

#### options.query : <code>string</code>
A query string to parse and store in jsdoc.env.opts.query. Example: foo=bar&baz=true.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+recurse"></a>

#### options.recurse : <code>boolean</code>
Recurse into subdirectories when scanning for source files and tutorials.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+readme"></a>

#### options.readme : <code>string</code>
The path to the project's README file. Default: path/to/sourcefiles/README.md.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+template"></a>

#### options.template : <code>string</code>
The path to the template to use. Default: path/to/jsdoc/templates/default.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials"></a>

#### options.tutorials : <code>string</code>
Directory in which JSDoc should search for tutorials.

**Kind**: instance property of [<code>JsdocOptions</code>](#module_jsdoc-api..JsdocOptions)  

* * *

&copy; 2015-18 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
