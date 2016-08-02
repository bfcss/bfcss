
const createMediaRule = media => rule => {
  return `@media ${media}{${rule}}`
}

module.exports = createMediaRule
