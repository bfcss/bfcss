
import test from 'ava'
import createMultiValueRules from '../lib/create-multi-value-rules'

test('is a function', t => {
  t.is(typeof createMultiValueRules, 'function')
})

test('returns a partial function', t => {
  t.is(typeof createMultiValueRules('hi'), 'function')
})

test('returns another partial function', t => {
  t.is(typeof createMultiValueRules('hi')('display'), 'function')
})

test('returns an array of rules', t => {
  const rules = createMultiValueRules('d')('display')([
    'block',
    'inline-block',
    'inline',
    'table',
    'table-row',
    'table-cell',
    'flex',
    'inline-flex',
    'none',
  ])
  t.true(Array.isArray(rules))
  t.regex(rules[0], /^\.db{display:block}/)
  t.regex(rules[1], /^\.dib{display:inline-block}/)
  t.regex(rules[2], /^\.di{display:inline}/)
})

test('returns an array of rules with number suffixes', t => {
  const rules = createMultiValueRules('o')('opacity')([
    0,
    .25,
    .5,
    .75,
    1
  ])
  t.true(Array.isArray(rules))
  t.regex(rules[0], /^\.o0{opacity:0}/)
  t.regex(rules[1], /^\.o1{opacity:0.25}/)
  t.regex(rules[2], /^\.o2{opacity:0.5}/)
})

