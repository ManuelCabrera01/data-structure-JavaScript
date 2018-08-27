//DEPTH FIRST TRAVERSAL FUNCTION -VERSION- IN-ORDER
//is just a way to travel to the tree or traversing to the tree and touching every node in this pattern we are gonna look each branch al the way to the bottom... this method will run every single node of the binary search tree and will applay the iteratorFun function to each of every node

//this is call in order because we are gonna touch el node from lease to greater that mean that it will run the iteratorFunc on the first child of the tree then on the parent node of the tree and then on the rigth node of the tree

//this method is gonna take a funtionas argument call iteratorFunc and its purpuse is just to log nodes
BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  //we are gonna invoke a iterator function on every node starting on the lowest and by that we check if there are any left node
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc);
  }
  // this step will just apply the iteratorFunc to the parent node
  iteratorFunc(this.value);
  //and we apply the same concept to the right node
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc);
  }
};
// this. function allow to fallow avery single branch of our tree all the way to the botton

// iterator function  in this case just gonna logOut each element of the tree
function log(value) {
  console.log(value);
}
