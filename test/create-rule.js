
import test from 'ava'
import createRule from '../lib/create-rule'

test('is a function', t => {
  t.is(typeof createRule, 'function')
})

test('returns a partial function', t => {
  t.is(typeof createRule('.hi'), 'function')
})

test('returns another partial function', t => {
  t.is(typeof createRule('.hi')('display'), 'function')
})

test('returns a rule string', t => {
  const rule = createRule('.hi')('display')('block')
  t.is(typeof rule, 'string')
  t.regex(rule, /\.hi{display:block}/)
})

