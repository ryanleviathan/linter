const Stack = require("./stack")

function stripInput(input) {
  return input.match(/[(){}\[\]]/g)
}

function linter(body) {
  let result = true
  const stack = new Stack()
  const linter = stripInput(body.lint)
  const opening = ['(', '[', '{']
  const matching = {
    '(':')',
    '[':']',
    '{':'}',
    ')':'(',
    ']':'[',
    '}':'{'
  }
  linter.map(item => {
    if(opening.includes(item)) {
      stack.push(item)
    } else {
      if(matching[item] === stack.peek()) {
        stack.pop()
      } else {
        result = { missing: matching[item] || stack.peek() }
      }
    }
  })
  if(stack.peek()) {
    result = { missing: matching[stack.peek()] }
  }
  return result
}

module.exports = { linter }