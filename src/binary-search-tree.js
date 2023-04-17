const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = insertNode(this.treeRoot, data);

    function insertNode(node, data) {
      if (!node) {
        return new Node(data);
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else if (data > node.data) {
        node.right = insertNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function searchNode(node, data) {
      if (!node) {
        return false;
      } else if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return searchNode(node.left, data);
      } else if (data > node.data) {
        return searchNode(node.right, data);
      }
    }
    return searchNode(this.treeRoot, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      }
    }
    return findNode(this.treeRoot, data);
  }

  remove(data) {
    this.treeRoot = detachNode(this.treeRoot, data);

    function detachNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = detachNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = detachNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          let minRightNode = node.right;

          while (minRightNode.left) {
            minRightNode = minRightNode.left;
          }

          node.data = minRightNode.data;
          node.right = detachNode(node.right, minRightNode.data);

          return node;
        }
      }
    }
  }

  min() {
    if (!this.treeRoot) {
      return null;
    } else {
      let currentNode = this.treeRoot;

      while (currentNode.left) {
        currentNode = currentNode.left;
      }

      return currentNode.data;
    }
  }

  max() {
    if (!this.treeRoot) {
      return null;
    } else {
      let currentNode = this.treeRoot;

      while (currentNode.right) {
        currentNode = currentNode.right;
      }

      return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
