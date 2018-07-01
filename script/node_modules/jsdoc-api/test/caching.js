'use strict'
const TestRunner = require('test-runner')
const jsdoc = require('../')
const Fixture = require('./lib/fixture')
const path = require('path')
const fs = require('fs-then-native')
const a = require('assert')

/* needs to be sequence as `jsdoc.cache` is shared between tests */
const runner = new TestRunner({ sequential: true })

runner.test('caching: .explainSync({ files, cache: true })', function () {
  const f = new Fixture('class-all')
  jsdoc.cache.dir = 'tmp/cache-sync'
  return jsdoc.cache.clear()
    .then(() => {
      const output = jsdoc.explainSync({ files: f.sourcePath, cache: true })
      const expectedOutput = f.getExpectedOutput(output)

      a.ok(typeof output === 'object')
      a.deepEqual(output, expectedOutput)
    })
})

runner.test('caching: .explain({ files, cache: true  })', function () {
  const f = new Fixture('class-all')
  jsdoc.cache.dir = 'tmp/cache'
  return jsdoc.cache.clear()
    .then(() => {
      return jsdoc.explain({ files: f.sourcePath, cache: true })
        .then(output => {
          const cachedFiles = fs.readdirSync(jsdoc.cache.dir)
            .map(file => path.resolve(jsdoc.cache.dir, file))
          a.strictEqual(cachedFiles.length, 1)
          a.deepEqual(output, f.getExpectedOutput(output))
          const cachedData = JSON.parse(fs.readFileSync(cachedFiles[0], 'utf8'))
          Fixture.removeFileSpecificData(cachedData)
          a.deepEqual(
            cachedData,
            f.getExpectedOutput(output)
          )
        })
    })
})

runner.test('caching: .explain({ source, cache: true  }) - Ensure correct output (#147)', function () {
  return jsdoc.cache.clear().then(() => {
    let one = jsdoc.explain({ source: '/**\n * Function one\n */\nfunction one () {}\n', cache: true })
    let two = jsdoc.explain({ source: '/**\n * Function two\n */\nfunction two () {}\n', cache: true })
    let three = jsdoc.explain({ source: '/**\n * Function three\n */\nfunction three () {}\n', cache: true })
    Promise.all([ one, two, three ]).then(output => {
      a.strictEqual(output[0][0].description, 'Function one')
      a.strictEqual(output[1][0].description, 'Function two')
      a.strictEqual(output[2][0].description, 'Function three')
    })

    /* ensure it works correctly the second time */
    one = jsdoc.explain({ source: '/**\n * Function one\n */\nfunction one () {}\n', cache: true })
    two = jsdoc.explain({ source: '/**\n * Function two\n */\nfunction two () {}\n', cache: true })
    three = jsdoc.explain({ source: '/**\n * Function three\n */\nfunction three () {}\n', cache: true })
    Promise.all([ one, two, three ]).then(output => {
      a.strictEqual(output[0][0].description, 'Function one')
      a.strictEqual(output[1][0].description, 'Function two')
      a.strictEqual(output[2][0].description, 'Function three')
    })
  })
})
