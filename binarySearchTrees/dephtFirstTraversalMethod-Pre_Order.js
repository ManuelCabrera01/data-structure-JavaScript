//pre-order will touch the parent node first then the left node then the right node, this is usefull is you want to make a copy of the tree
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === "pre-order") {
    iteratorFunc(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order);
  }

  if (order === "in-order") {
    iteratorFunc(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc, order);
  }
};
