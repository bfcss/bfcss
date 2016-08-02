
const createRule = require('./create-rule')
const createComplexRule = require('./create-complex-rule')
const createMediaRule = require('./create-media-rule')
// const createMediaRulesFromStyle = require('./create-media-rules-from-style')
const createMultiValueRules = require('./create-multi-value-rules')
const createDimensionalRules = require('./create-dimensional-rules')
const flattenArray = require('./flatten-array')
const defaultBreakpoints = require('./breakpoints')

const createResponsiveStyles = breakpoints => style => {
}

const createRulesFromStyle = (prefix = '') => style => {
  const rules = []
  const { property, value, properties, values, declarations } = style
  const selector = prefix + style.selector

  const isComplex = declarations && typeof declarations === 'object'
  const isMultiValue = Array.isArray(values)
  const isDimensional = properties && typeof properties === 'object'

  if (!isComplex && !isMultiValue && !isDimensional) {
    rules.push(createRule(selector)(property)(value))
  } else if (isComplex) {
    rules.push(createComplexRule(selector)(declarations))
  } else if (isMultiValue && !isDimensional) {
    rules.push(
      createMultiValueRules(selector)(property)(values)
      .reduce(flattenArray, [])
    )
  } else if (isMultiValue && isDimensional) {
    rules.push(
      createDimensionalRules(prefix)(properties)(values)
      .reduce(flattenArray, [])
    )
  }
  return rules.reduce(flattenArray, [])
}

const mapStyles = (breakpoints) => (style) => {
  if (typeof style !== 'object') {
    console.warn('Configuration must be an array of objects')
    return
  }

  const rules = createRulesFromStyle()(style)

  if (style.responsive) {
    Object.keys(breakpoints).forEach(key => {
      const breakpoint = breakpoints[key]
      delete style.responsive
      const responsive = createRulesFromStyle(key + '-')(style)
      const wrapped = createMediaRule(breakpoint)(responsive.join('\n'))
      rules.push(wrapped)
    })
  }

  return rules
}

const createRules = (breakpoints = defaultBreakpoints) => styles => {
  const rules = styles.map(mapStyles(breakpoints)).reduce(flattenArray, [])

  return rules
}

module.exports = createRules

