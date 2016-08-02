
const styles = require('./lib/styles')
const breakpoints = require('./lib/breakpoints')
const createRulesFromStyles = require('./lib/create-rules-from-styles')

const getCss = () => {
  const rules = createRulesFromStyles(breakpoints)(styles)
  const css = rules.join('\n')

  return css
}

module.exports = getCss

