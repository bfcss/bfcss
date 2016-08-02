
import test from 'ava'
import createMediaRule from '../lib/create-media-rule'

test('is a function', t => {
  t.is(typeof createMediaRule, 'function')
})

test('returns a partial function', t => {
  t.is(typeof createMediaRule('(min-width:40em)'), 'function')
})

test('returns a media rule string', t => {
  const rule = createMediaRule('(min-width:40em)')('.db{display:block}')
  t.is(typeof rule, 'string')
  t.regex(rule, /^@media \(min-width\:40em\){/)
})

