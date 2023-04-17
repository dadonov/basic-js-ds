const { NotImplementedError } = require("../extensions/index.js"),
      { ListNode } = require("../extensions/list-node.js");

function removeKFromList(list, integer) {
  let current = list;
  let previous = null;

  while (current.next) {
    current.value === integer ? (previous ? (previous.next = current.next) : (list = current.next)) : (previous = current);
    current = current.next;
    current.value === integer ? (previous.next = current.next) : current.next;
  }
  return list;
}

module.exports = {
  removeKFromList,
};
