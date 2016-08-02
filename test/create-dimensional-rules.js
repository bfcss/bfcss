
import test from 'ava'
import createDimensionalRules from '../lib/create-dimensional-rules'

const isFlatArray = arr => !arr.reduce((a, b) => {
  return a || Array.isArray(b)
}, false)

test('is a function', t => {
  t.is(typeof createDimensionalRules, 'function')
})

test('returns a partial function', t => {
  t.is(typeof createDimensionalRules()({}), 'function')
})

test('returns a flat array of rules', t => {
  const rules = createDimensionalRules()({
    m: 'margin',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left'
  })([
    0, 8, 16, 32, 64
  ])
  t.true(isFlatArray(rules))
  t.is(rules[0], '.m0{margin:0}')
  t.is(rules[1], '.m1{margin:8px}')
})

test('handles array props', t => {
  const rules = createDimensionalRules()({
    mx: [
      'margin-left',
      'margin-right'
    ]
  })([
    0, 8
  ])
  t.true(isFlatArray(rules))
  t.is(rules[0], '.mx{margin-left:0;margin-right:0}')
  t.is(rules[1], '.mx{margin-left:8px;margin-right:8px}')
})

