
/*
  {
    properties: {
      m: 'margin',
      mt: 'margin-top',
      mr: 'margin-right',
      mb: 'margin-bottom',
      ml: 'margin-left',

      mx: [
        'margin-left',
        'margin-right'
      ]
    },
    values: [
      0, 8, 16, 32, 64
    ]
  }
*/

const createMultiValueRules = require('./create-multi-value-rules')

const createDimensionalRules = (prefix = '') => props => vals => {
  const keys = Object.keys(props)
  const rules = keys.map(key => {
    const selector = prefix + key
    const prop = props[key]
    return createMultiValueRules(selector)(prop)(vals)
  }).reduce((a, b) => a.concat(b), [])

  return rules
}

module.exports = createDimensionalRules

