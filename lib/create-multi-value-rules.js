
/*
  {
    // Multi-value scale rules
    selector: 'o-',
    property: 'opacity',
    values: [
      0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
    ]
  },
*/

const createRule = require('./create-rule')
const createComplexRule = require('./create-complex-rule')

const getInitials = str => {
  const abbr = str.split('-')
    .map(s => s.charAt(0))
    .join('')
  return abbr
}

const createMultiValueRules = sel => prop => vals => {
  const rules = vals.map((val, i) => {
    const abbr = typeof val === 'number'
      ? i
      : getInitials(val) // Might need to pass this as an arg

    if (Array.isArray(prop)) {
      const style = prop.reduce((a, b) => {
        a[b] = val
        return a
      }, {})
      return createComplexRule(sel)(style)
    }

    return createRule(sel + abbr)(prop)(val)
  })

  return rules
}

module.exports = createMultiValueRules

