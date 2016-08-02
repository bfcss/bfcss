
const flatten = (a = [], b) => {
  if (Array.isArray(b)) {
    return [...a, ...b]
  }

  return [...a, b]
}

module.exports = flatten

