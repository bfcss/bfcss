
import test from 'ava'
import createComplexRule from '../lib/create-complex-rule'

test('is a function', t => {
  t.is(typeof createComplexRule, 'function')
})

test('returns a partial function', t => {
  t.is(typeof createComplexRule('hi'), 'function')
})

test('returns a rule string', t => {
  const rule = createComplexRule('hi')({
    display: 'block',
    margin: 0
  })
  t.is(typeof rule, 'string')
  t.is(rule, '.hi{display:block;margin:0}')
})

