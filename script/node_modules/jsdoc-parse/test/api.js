'use strict'
const TestRunner = require('test-runner')
const jsdocParse = require('../')
const fs = require('fs')
const a = require('assert')
const runner = new TestRunner()

runner.test('api: valid json out', function () {
  const jsdocOutput = JSON.parse(fs.readFileSync('./test/fixture/jsdoc-input.json', 'utf8'))
  const data = jsdocParse(jsdocOutput)
  a.strictEqual(data[0].name, 'Chainable')
})
