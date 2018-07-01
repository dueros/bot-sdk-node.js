'use strict'
const TestRunner = require('test-runner')
const jsdoc = require('../')
const Fixture = require('./lib/fixture')
const path = require('path')
const a = require('assert')

const runner = new TestRunner()

runner.test('.explainSync({ files })', function () {
  const f = new Fixture('class-all')
  const output = jsdoc.explainSync({ files: f.sourcePath })
  const expectedOutput = f.getExpectedOutput(output)

  a.ok(typeof output === 'object')
  a.deepEqual(output, expectedOutput)
})

runner.test('.explainSync({ source })', function () {
  const f = new Fixture('class-all')
  const output = jsdoc.explainSync({ source: f.getSource() })
  const expectedOutput = f.getExpectedOutput(output)

  a.ok(typeof output === 'object')
  a.deepEqual(output, expectedOutput)
})

runner.test('.explainSync({ source }), defaults', function () {
  const output = jsdoc.explainSync({ source: '/** example doclet */ \n const example = true' })
  a.strictEqual(output[0].description, 'example doclet')
})

runner.test('.explainSync: no valid files', function () {
  a.throws(
    function () {
      jsdoc.explainSync({ files: 'package.json' })
    },
    function (err) {
      return err.name === 'JSDOC_ERROR'
    }
  )
})

runner.test('.explainSync: missing files', function () {
  a.throws(
    function () {
      jsdoc.explainSync({ files: 'oyutigbl' })
    },
    function (err) {
      return err.name === 'JSDOC_ERROR'
    }
  )
})

runner.test('.explainSync: invalid doclet syntax', function () {
  a.throws(
    function () {
      const input = path.resolve(__dirname, 'fixture', 'buggy', 'bad-doclet-syntax.js')
      jsdoc.explainSync({ files: input })
    },
    function (err) {
      return err.name === 'JSDOC_ERROR'
    }
  )
})
