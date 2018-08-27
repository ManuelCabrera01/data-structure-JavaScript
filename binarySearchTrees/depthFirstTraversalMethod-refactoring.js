BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  node;
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc);
  }

  iteratorFunc(this.value);
  e;
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc);
  }
};
//  ^
//  |
//   ---this method touch from is IN-ORDER(from less to greater)

// here the depth first traversal order is going to be modify so i can use it in dirent orders... and we doing that by adding order paramenter the de depthFirstTraversal call "order" the only posible value that it can have is in-order, pre-order, post-order

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  node;
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order);
  }

  if (order === "in-order") {
    iteratorFunc(this.value);
  }
  e;
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc, order);
  }
};
