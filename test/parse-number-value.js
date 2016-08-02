
import test from 'ava'
import parseNumberValue from '../lib/parse-number-value'

test('is a function', t => {
  t.is(typeof parseNumberValue, 'function')
})

test('returns a function', t => {
  t.is(typeof parseNumberValue('margin'), 'function')
})

test('returns unitless values for certain properties', t => {
  const vals = [
    'line-height',
    'font-weight',
    'opacity',
    'z-index',
    'order',
    'flex-grow',
    'flex-shrink'
  ].map(p => parseNumberValue(p)(1))

  vals.forEach(v => {
    t.is(v, 1)
  })
})

test('returns unitless values for 0', t => {
  t.is(parseNumberValue('margin')(0), 0)
})

test('returns px values', t => {
  t.is(parseNumberValue('margin')(1), '1px')
})

test('does not add px to number strings', t => {
  t.is(parseNumberValue('margin')('1'), '1')
})

