
const space = [
  0, 8, 16, 32, 64
]

const styles = [
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
  {
    responsive: true,
    selector: 'd',
    property: 'display',
    values: [
      'none',
      'block',
      'inline-block',
      'inline',
      'table',
      'table-row',
      'table-cell',
      'flex',
      'inline-flex'
    ]
  },
  {
    selector: 'c',
    property: 'clear',
    values: [
      'left',
      'right',
      'both',
      'none'
    ]
  },
  {
    responsive: true,
    selector: 'f',
    property: 'float',
    values: [
      'left',
      'right',
      'none'
    ]
  },
  {
    responsive: true,
    selector: 'h',
    property: 'font-size',
    values: [
      48,
      32,
      24,
      20,
      16,
      14,
      12
    ]
  },
  {
    selector: 'fw',
    property: 'font-weight',
    values: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ]
  },
  {
    responsive: true,
    selector: 't',
    property: 'text-align',
    values: [
      'left',
      'center',
      'right'
    ]
  },
  {
    selector: 'mw',
    property: 'max-width',
    values: [
      128,
      256,
      512,
      768,
      1024
    ]
  },
  {
    responsive: true,
    properties: {
      b: 'border',
      bt: 'border-top',
      br: 'border-right',
      bb: 'border-bottom',
      bl: 'border-left'
    },
    values: [
      '1px solid'
    ]
  },
  {
    selector: 'overflow-',
    property: 'overflow',
    values: [
      'visible',
      'hidden',
      'scroll',
      'auto'
    ]
  },
  {
    selector: 'o',
    property: 'opacity',
    values: [
      0,
      1/8,
      1/4,
      3/8,
      1/2,
      5/8,
      3/4,
      7/8,
      1
    ]
  }
]

module.exports = styles

