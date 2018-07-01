'use strict'
const transform = require('./transform')

/**
 * @module jsdoc-parse
 * @example
 * const jsdocParse = require('jsdoc-parse')
 */
module.exports = jsdocParse

/**
 * @param {object[]} - jsdoc output
 * @returns {object[]}
 * @alias module:jsdoc-parse
 */
function jsdocParse (jsdocData) {
  let data = transform(jsdocData)
  return sort(data)
}

function sort (array, properties) {
  const sortBy = require('sort-array')
  const customOrder = {
    kind: [ 'class', 'constructor', 'mixin', 'member', 'namespace', 'enum', 'constant', 'function', 'event', 'typedef', 'external' ],
    scope: [ 'global', 'instance', 'static', 'inner' ]
  }
  properties = properties || [ 'scope', 'category', 'kind', 'order' ]
  return sortBy(array, properties, customOrder)
}
