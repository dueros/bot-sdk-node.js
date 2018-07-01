'use strict'
const TestRunner = require('test-runner')
const Cache = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('sync: string key, string data', function () {
  const cache = new Cache({ dir: 'tmp/sync/one' })
  const objectKey = 'one'
  const data = 'test1'
  cache.writeSync(objectKey, data)
  const result = cache.readSync(objectKey)
  a.strictEqual(result, data)
})

runner.test('sync: object key, string data', function () {
  const cache = new Cache({ dir: 'tmp/sync/two' })
  const objectKey = { one: true }
  const data = 'test1'
  cache.writeSync(objectKey, data)
  const result = cache.readSync(objectKey)
  a.strictEqual(result, data)
})

runner.test('sync: object key, array data', function () {
  const cache = new Cache({ dir: 'tmp/sync/three' })
  const objectKey = { one: true }
  const data = ['test1']
  cache.writeSync(objectKey, data)
  const result = cache.readSync(objectKey)
  a.deepEqual(result, data)
})

runner.test('sync: key not found', function () {
  const cache = new Cache({ dir: 'tmp/sync/four' })
  const objectKey = 'asfrfe'
  const result = cache.readSync(objectKey)
  a.deepEqual(result, null)
})

runner.skip('sync: .remove()', function () {
  const cache = new Cache({ dir: 'four' })
  return cache.writeSync('one', 'test1')
    .then(function() {
      return cache.remove()
    })
    .then(function() {
      a.throws(function () {
        fs.statSync(tmpDir)
      })
    })
    .catch(function (err) {
      console.error(err.stack)
      a.fail(err.message)
    })
})
