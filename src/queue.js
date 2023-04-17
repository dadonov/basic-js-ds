const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newListNode = new ListNode(value);

    if (!this.head || !this.tail) {
      this.head = newListNode;
      this.tail = newListNode;
      return this;
    }

    this.tail.next = newListNode;
    this.tail = newListNode;

    return this;
  }

  dequeue() {
    let head = this.head;
    this.head = head.next;
    return head.value;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue,
};
