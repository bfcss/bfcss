
const parseNumberValue = require('./parse-number-value')

const createRule = sel => prop => val => {
  return `.${sel}{${prop}:${parseNumberValue(prop)(val)}}`
}

module.exports = createRule

