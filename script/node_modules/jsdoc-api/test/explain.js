'use strict'
const TestRunner = require('test-runner')
const jsdoc = require('../')
const Fixture = require('./lib/fixture')
const path = require('path')
const a = require('assert')

const runner = new TestRunner()

runner.test('.explain({ files })', function () {
  const f = new Fixture('class-all')
  return jsdoc.explain({ files: f.sourcePath })
    .then(function (output) {
      a.deepEqual(output, f.getExpectedOutput(output))
    })
})

runner.test('.explain({ source })', function () {
  const f = new Fixture('class-all')
  return jsdoc.explain({ source: f.getSource() })
    .then(function (output) {
      a.deepEqual(output, f.getExpectedOutput(output))
    })
})

runner.test(".explain: file doesn't exist", function () {
  return jsdoc.explain({ files: 'sdfafafirifrj' })
    .then(function () {
      a.fail('should not reach here')
    })
    .catch(function (err) {
      a.strictEqual(err.name, 'JSDOC_ERROR')
    })
})

runner.test('.explain: invalid doclet syntax', function () {
  const input = path.resolve(__dirname, 'fixture', 'buggy', 'bad-doclet-syntax.js')
  return jsdoc.explain({ files: input })
    .then(function () {
      a.fail('should not reach here')
    })
    .catch(function (err) {
      a.strictEqual(err.name, 'JSDOC_ERROR')
    })
})

runner.test('.explain({ files }): generate a warning', function () {
  return jsdoc.explain({ files: 'test/fixture/buggy/ignore-with-value.js' })
})
