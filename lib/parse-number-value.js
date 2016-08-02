
const unitless = [
  'line-height',
  'font-weight',
  'opacity',
  'z-index',
  'order',
  'flex-grow',
  'flex-shrink',
]

const parseNumberValue = prop => val => {
  if (typeof val !== 'number' || unitless.indexOf(prop) > -1 || val === 0) {
    return val
  }

  return val + 'px'
}

module.exports = parseNumberValue

