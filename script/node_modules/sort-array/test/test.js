const TestRunner = require('test-runner')
const sortBy = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('sortBy', function () {
  const fixture = [
    { a: 4, b: 1, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: 1, b: 3, c: 4 },
    { a: 1, b: 1, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: 1 }
  ]
  const expected = [
    { a: 1, b: 1, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 1, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 1, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 4, b: 3, c: 1 }
  ]
  a.deepStrictEqual(sortBy(fixture, ['a', 'b', 'c']), expected)
})

runner.test('sortBy, with undefined vals', function () {
  const fixture = [ { a: 1 }, { }, { a: 0 } ]
  const expected = [ { }, { a: 0 }, { a: 1 } ]
  a.deepStrictEqual(sortBy(fixture, 'a'), expected)
})

runner.test('sortBy, with undefined vals 2', function () {
  const fixture = [ { a: 'yeah' }, { }, { a: 'what' } ]
  const expected = [ { }, { a: 'what' }, { a: 'yeah' } ]
  a.deepStrictEqual(sortBy(fixture, 'a'), expected)
})

runner.test('sortBy, with undefined vals 3', function () {
  const fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 },
  ]
  const expected = [
    { a: undefined },
    { a: 1 },
    { a: 2 }
  ]
  a.deepStrictEqual(sortBy(fixture, 'a'), expected)
})

runner.test('sortBy, with undefined vals 3, customOrder', function () {
  const fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 },
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: undefined },
  ]
  const customOrder = {
    a: [ 1, 2, undefined ]
  }
  a.deepStrictEqual(sortBy(fixture, 'a', customOrder), expected)
})

runner.test('sortBy, with null vals, customOrder', function () {
  const fixture = [
    { a: 2 },
    { a: null },
    { a: 1 },
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: null },
  ]
  const customOrder = {
    a: [ 1, 2, null ]
  }
  a.deepStrictEqual(sortBy(fixture, 'a', customOrder), expected)
})

runner.test('custom order', function () {
  const fixture = [{ fruit: 'apple' }, { fruit: 'orange' }, { fruit: 'banana' }, { fruit: 'pear' }]
  const expected = [{ fruit: 'banana' }, { fruit: 'pear' }, { fruit: 'apple' }, { fruit: 'orange' }]
  const fruitOrder = [ 'banana', 'pear', 'apple', 'orange' ]
  a.deepStrictEqual(sortBy(fixture, 'fruit', { fruit: fruitOrder }), expected)
})

runner.test('sort by two columns, both custom', function () {
  const expected = [
    { importance: 'speed', weight: 'low' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'speed', weight: 'high' },
    { importance: 'strength', weight: 'low' },
    { importance: 'strength', weight: 'medium' },
    { importance: 'strength', weight: 'high' },
    { importance: 'intelligence', weight: 'low' },
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'intelligence', weight: 'high' }
  ]
  const fixture = [
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: 'low' },
    { importance: 'strength', weight: 'low' },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: 'low' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'strength', weight: 'medium' }
  ]
  const customOrder = {
    importance: [ 'speed', 'strength', 'intelligence' ],
    weight: [ 'low', 'medium', 'high' ]
  }

  const result = sortBy(fixture, [ 'importance', 'weight' ], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('jsdoc-parse', function () {
  const fixture = require('./fixture/jsdoc-parse')
  const expected = require('./expected/jsdoc-parse')
  const customOrder = {
    kind: [ 'class', 'constructor', 'mixin', 'member', 'namespace', 'enum',
      'constant', 'function', 'event', 'typedef', 'external' ],
    scope: [ 'global', 'instance', 'static', 'inner' ]
  }
  const result = sortBy(fixture, ['kind', 'scope'], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('sort by deep value', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 4 } },
    { inner: { number: 5 } }
  ]
  const result = sortBy(fixture, 'inner.number')
  a.deepStrictEqual(result, expected)
})

runner.test('sort by deep value, custom order', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]
  const customOrder = {
    'inner.number': [ 1, 2, 4, 3, 5 ]
  }
  const result = sortBy(fixture, 'inner.number', customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('sort nulls', function () {
  const expected = [
    { importance: 'speed', weight: null },
    { importance: 'strength', weight: null },
    { importance: 'intelligence', weight: null },
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'strength', weight: 'medium' }
  ]
  const fixture = [
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: null },
    { importance: 'strength', weight: null },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: null },
    { importance: 'speed', weight: 'medium' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'strength', weight: 'medium' }
  ]
  const result = sortBy(fixture, 'weight')
  a.deepStrictEqual(result, expected)
})

runner.test('sort nulls, 2 column customOrder', function () {
  const expected = [
    { importance: undefined, weight: null },
    { importance: 1, weight: 'a' },
    { importance: 1, weight: 'b' },
    { importance: 1, weight: null },
    { importance: 2, weight: 'a' },
    { importance: 2, weight: null },
    { importance: null, weight: 'a' },
    { importance: 3, weight: 'b' },
    { importance: 3, weight: null }
  ]
  const fixture = [
    { importance: 3, weight: 'b' },
    { importance: 1, weight: 'b' },
    { importance: 2, weight: 'a' },
    { importance: undefined, weight: null },
    { importance: 2, weight: null },
    { importance: 1, weight: 'a' },
    { importance: null, weight: 'a' },
    { importance: 1, weight: null },
    { importance: 3, weight: null },
  ]
  const customOrder = {
    importance: [ undefined, 1, 2, null, 3 ],
    weight: [ 'a', 'b', null ]
  }
  const result = sortBy(fixture, [ 'importance', 'weight' ], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('sortBy with nulls', function () {
  const fixture = [
    { a: 4, b: null, c: 3 },
    { a: 4, b: 2, c: null },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: null, b: 3, c: 4 },
    { a: null, b: null, c: 4 },
    { a: null, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: null }
  ]
  const expected = [
    { a: null, b: null, c: 4 },
    { a: null, b: 2, c: 4 },
    { a: null, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: null, c: 3 },
    { a: 4, b: 2, c: null },
    { a: 4, b: 3, c: null }
  ]
  const result = sortBy(fixture, ['a', 'b', 'c'])
  a.deepStrictEqual(result, expected)
})

runner.test('sort by deep value, custom order, nulls', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: null } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: null } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]
  const customOrder = {
    'inner.number': [ 1, 2, null, 3, 5 ]
  }
  const result = sortBy(fixture, 'inner.number', customOrder)
  a.deepStrictEqual(result, expected)
})
