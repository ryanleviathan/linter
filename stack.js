class Stack {
  
  #stack

  constructor() {
    this.#stack = []
  }

  push(item) {
    this.#stack.push(item)
  }

  pop() {
    return this.#stack.pop()
  }

  peek() {
    return this.#stack[this.#stack.length -1]
  }
}

module.exports = {
  Stack
}

const myStack = new Stack()
myStack.push("[")
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())