
import test from 'ava'
import bfcss from '..'

test('is a function', t => {
  t.is(typeof bfcss, 'function')
})

test('returns CSS string', t => {
  const css = bfcss()
  t.is(typeof css, 'string')
})

