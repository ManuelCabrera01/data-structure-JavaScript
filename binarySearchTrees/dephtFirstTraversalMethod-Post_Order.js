// post-order you want to run all of the left children then the right children the the parent node, this is usefull the savetly delete from a binary search tree beacause estar at the botton and work its way up
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
  if (order === "post-order") {
    iteratorFunc(this.value);
  }
};
