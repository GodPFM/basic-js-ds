const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const addNewValue = (tree, data) => {
      if (tree === null) {
        tree = new Node(data);
        return tree;
      }
      if (data < tree.data) {
        tree.left = addNewValue(tree.left, data);
      } else {
        tree.right = addNewValue(tree.right, data);
      }
      return tree;
    }
    this.tree = addNewValue(this.tree, data);
  }

  has(data) {
    const result = this.find(data);
    return result !== null;

  }

  find(data) {
    let foundValue;
    const findData = (tree, data) => {
      if (tree === null) {
        return null;
      }
      if (tree.data === data) {
        foundValue = tree;
      }
      findData(tree.left, data);
      findData(tree.right, data);
    }
    findData(this.tree, data);
    if (foundValue === undefined) {
      return null;
    }
    return foundValue;
  }

  remove(data) {
    const removeData = (tree, data) => {
      if (tree === null) {
        return;
      }
      if (tree.data === data) {
        tree.data = undefined;
      }
      if (data < tree.data) {
        removeData(tree.left, data);
      } else {
        removeData(tree.right, data);
      }
      return tree;
    }
    this.tree = removeData(this.tree, data);
  }

  min() {
    const findMin = (tree) => {
      if (tree === null) {
        return;
      }
      while (tree.left !== null) {
        tree = tree.left;
      }
      return tree.data;
    }
    return findMin(this.tree);
  }

  max() {
    const findMax = (tree) => {
      if (tree === null) {
        return;
      }
      while (tree.right !== null) {
        tree = tree.right;
      }
      return tree.data;
    }
    return findMax(this.tree);
  }
}

module.exports = {
  BinarySearchTree
};
