// breadth First Traversal it will traver every node but insted of moving by branch it will be moving level by level

// it will start at the very top and move down to the nex level and so on is usefull to find a Hierarchy or level of command example if we want to store all the employ in a binary search tree we will know how is in a more executive roll

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  // first step is to define a queue by creating a empy array
  // queue is a list of element that follow the ruel first in first out
  let queue = [this];
  // we are going to create a while loop and run it as long as a our queue is not empty
  while (queue.length) {
    // the first step is shift out the first node of uor queue and save it in a variable
    let treeNode = queue.shift();
    // now we want to run  our iteratorFunc in the node that we just shift
    iteratorFunc(treeNode);
    // now we want to push the children of our treenode into our queue then want to push that treenode into our queu
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    // and we do the same for out right child
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};
