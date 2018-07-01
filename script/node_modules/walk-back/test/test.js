const TestRunner = require('test-runner')
const walkBack = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('basic', function (t) {
  const filename = walkBack(__dirname + '/fixture/subdir', 'file.txt')
  a.ok(filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

runner.test('basic2', function (t) {
  const filename = walkBack(__dirname + '/fixture', 'file.txt')
  a.ok(filename.search('walk-back/test/fixture/file.txt') > 0)
})

runner.test('not found', function (t) {
  const filename = walkBack(__dirname + '/fixture', 'adskjfhladfn')
  a.strictEqual(filename, null)
})

runner.test('relative path', function (t) {
  const filename = walkBack('.', 'test/fixture/subdir/file.txt')
  a.ok(filename && filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

runner.test('relative path 2', function (t) {
  const filename = walkBack('./test/fixture/subdir', 'file.txt')
  a.ok(filename && filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

runner.test('startPath doesn\'t exist', function (t) {
  a.throws(function () {
    walkBack('slfnavnkln', 'file.txt')
  })
})
