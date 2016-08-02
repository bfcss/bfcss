
const parseNumberValue = require('./parse-number-value')

const createComplexRule = sel => style => {
  const decs = Object.keys(style).map(key => {
    return `${key}:${parseNumberValue(key)(style[key])}`
  }).join(';')

  return `.${sel}{${decs}}`
}

module.exports = createComplexRule

