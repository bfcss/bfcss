
import test from 'ava'
import createRulesFromStyles from '../lib/create-rules-from-styles'

const space = [
  0, 8, 16, 32, 64
]

const styles = [
  {
    selector: 'caps',
    property: 'text-transform',
    value: 'uppercase'
  },
  {
    selector: 'o',
    property: 'opacity',
    values: [
      0, .25, .5, .75, 1
    ]
  },
  {
    responsive: true,
    selector: 'd',
    property: 'display',
    values: [
      'block',
      'inline-block',
      'inline',
      'table',
      'table-row',
      'table-cell',
      'flex',
      'inline-flex',
    ],
    responsive: true
  },
  {
    responsive: true,
    properties: {
      m: 'margin',
      mt: 'margin-top',
      mr: 'margin-right',
      mb: 'margin-bottom',
      ml: 'margin-left',
      mx: [
        'margin-left',
        'margin-right'
      ],
      my: [
        'margin-top',
        'margin-bottom'
      ],
      p: 'padding',
      pt: 'padding-top',
      pr: 'padding-right',
      pb: 'padding-bottom',
      pl: 'padding-left',
      px: [
        'padding-left',
        'padding-right'
      ],
      py: [
        'padding-top',
        'padding-bottom'
      ]
    },
    values: space
  },
]

test('is a function', t => {
  t.is(typeof createRulesFromStyles, 'function')
})

test('creates rules', t => {
  const rules = createRulesFromStyles()(styles)
})

