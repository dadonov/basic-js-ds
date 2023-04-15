const { NotImplementedError } = require("../extensions/index.js");

class Stack {
  constructor(stack = []) {
    this.stack = stack;
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack,
};
